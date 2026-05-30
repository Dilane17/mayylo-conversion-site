# Guide de Configuration Google Sheets - Mayylo Capture

Ce guide explique comment connecter le formulaire de préinscription à Google Sheets.

---

## 1. Créer le Google Sheet

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Créez une nouvelle feuille de calcul nommée **"Mayylo Leads"**
3. Renommez la première feuille en **"Leads"** (clic droit → Renommer)
4. Dans la première ligne (A1:J1), ajoutez les en-têtes suivants :

| A    | B              | C               | D        | E     | F    | G             | H                | I                  | J      |
| ---- | -------------- | --------------- | -------- | ----- | ---- | ------------- | ---------------- | ------------------ | ------ |
| Date | Nom entreprise | Nom responsable | WhatsApp | Email | Pays | Taille équipe | Besoin principal | Source acquisition | Statut |

---

## 2. Créer un Service Account Google Cloud

### Étape 2.1 : Accéder à Google Cloud Console

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Connectez-vous avec votre compte Google
3. Cliquez sur le sélecteur de projet en haut → **"Nouveau projet"**
4. Nommez le projet : `mayylo-capture-api`
5. Cliquez sur **"Créer"**

### Étape 2.2 : Activer l'API Google Sheets

1. Dans le menu de gauche, allez sur **"API et services" → "Bibliothèque"**
2. Recherchez **"Google Sheets API"**
3. Cliquez dessus puis sur **"Activer"**

### Étape 2.3 : Créer un Service Account

1. Allez sur **"API et services" → "Identifiants"**
2. Cliquez sur **"Créer des identifiants" → "Compte de service"**
3. Nommez le compte : `mayylo-sheets-service`
4. Cliquez sur **"Créer et continuer"**
5. Rôle : sélectionnez **"Éditeur"** (ou **"Propriétaire"** si vous voulez tous les droits)
6. Cliquez sur **"Continuer"**
7. Cliquez sur **"Terminé"**

### Étape 2.4 : Générer la clé privée

1. Retournez sur **"API et services" → "Identifiants"**
2. Cliquez sur le compte de service créé (`mayylo-sheets-service`)
3. Allez dans l'onglet **"Clés"**
4. Cliquez sur **"Ajouter une clé" → "Créer une nouvelle clé"**
5. Sélectionnez **JSON**
6. Cliquez sur **"Créer"**
7. **Un fichier JSON se télécharge automatiquement** — conservez-le précieusement !

---

## 3. Partager le Google Sheet avec le Service Account

1. Ouvrez votre Google Sheet "Mayylo Leads"
2. Cliquez sur le bouton **"Partager"** en haut à droite
3. Ajoutez l'email du service account (trouvé dans le fichier JSON, champ `client_email`)
   - Format : `mayylo-sheets-service@mayylo-capture-api.iam.gserviceaccount.com`
4. Définissez les permissions sur **"Éditeur"**
5. Cliquez sur **"Partager"**

---

## 4. Récupérer les informations nécessaires

### Sheet ID

Dans l'URL de votre Google Sheet :

```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
#                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#                     C'est le Sheet ID
```

Exemple : `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### Service Account Email

Dans le fichier JSON téléchargé, trouvez le champ :

```json
"client_email": "mayylo-sheets-service@mayylo-capture-api.iam.gserviceaccount.com"
```

### Private Key

Dans le fichier JSON, copiez la valeur du champ `private_key`.

**⚠️ FORMAT CRITIQUE** : La clé doit être sur **une seule ligne** avec `\n` comme séparateurs :

```bash
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\nnh0lA6D...\n-----END PRIVATE KEY-----\n"
```

**Comment obtenir le bon format :**

1. Ouvrez le fichier JSON téléchargé
2. Copiez la valeur de `private_key` (avec les guillemets)
3. Collez dans `.env.local`

**Ne pas faire :**

- ❌ Ne mettez pas la clé sur plusieurs lignes
- ❌ Ne supprimez pas les `\n`
- ❌ N'ajoutez pas d'espaces dans la clé

**Format correct (une ligne) :**

```bash
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQ...\n-----END PRIVATE KEY-----\n"
```

**Format incorrect :**

```bash
# ❌ Ne faites pas ça
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
MIIEvQ...
-----END PRIVATE KEY-----
"
```

---

## 5. Configurer les variables d'environnement

1. À la racine du projet, créez un fichier `.env.local` :

```bash
# Google Sheets Configuration
GOOGLE_SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
GOOGLE_SERVICE_ACCOUNT_EMAIL=mayylo-sheets-service@mayylo-capture-api.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

2. Remplacez les valeurs par vos informations

3. **Ne jamais committer ce fichier** (il est déjà dans `.gitignore`)

---

## 6. Tester l'intégration

1. Démarrez le serveur de développement :

   ```bash
   npm run dev
   ```

2. Remplissez le formulaire sur la page

3. Vérifiez que les données apparaissent dans votre Google Sheet

---

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Formulaire    │────▶│   API Route     │────▶│  Google Sheets  │
│   (Client)      │     │  /api/leads     │     │   (Leads Sheet) │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │                       │
         │                       │
    react-hook-form         JWT Auth + Append
         │                       │
    Zod Validation          Service Account
```

---

## Sécurité

- **Aucune clé Google n'est exposée côté client**
- Toutes les opérations Google Sheets sont effectuées côté serveur
- Les données sont validées avec Zod avant envoi
- Le Service Account n'a accès qu'aux Sheets partagés avec lui

---

## Dépannage

### Erreur "Missing Google service account credentials"

- Vérifiez que `.env.local` existe et contient les variables
- Redémarrez le serveur Next.js

### Erreur "Missing GOOGLE_SHEET_ID"

- Vérifiez l'ID du Sheet dans `.env.local`
- Assurez-vous de ne pas avoir d'espaces

### Erreur "403 Forbidden"

- Vérifiez que le Service Account a été ajouté comme éditeur du Sheet
- Attendez quelques minutes après le partage

### Les données n'apparaissent pas

- Vérifiez les logs dans la console Next.js
- Assurez-vous que la feuille s'appelle bien "Leads"
- Vérifiez les en-têtes de colonnes (A1:J1)
