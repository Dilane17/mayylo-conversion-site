# Configuration Environnement - Mayylo Capture

Ce fichier documente les variables d'environnement nécessaires pour connecter le formulaire à Google Sheets.

## Variables requises

```bash
# Google Sheets Configuration
GOOGLE_SHEET_ID=your_google_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

## Créer le fichier .env.local

1. Copier ce fichier en `.env.local` à la racine du projet
2. Remplacer les valeurs par vos informations Google Cloud
3. Ne jamais committer `.env.local` (déjà dans .gitignore)

## Guide de configuration complet

Voir `GOOGLE_SHEETS_SETUP.md` pour les étapes détaillées.
