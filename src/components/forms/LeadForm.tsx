"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { COMPANY_SIZES } from "@/constants";
import { Check, Send, Loader2 } from "lucide-react";

// Validation schema
const leadFormSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse e-mail valide"),
  phone: z.string().min(8, "Le numéro doit contenir au moins 8 chiffres"),
  companyName: z.string().min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères"),
  companySize: z.string().min(1, "Veuillez sélectionner une taille d'entreprise"),
  notes: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

interface LeadFormProps {
  onSuccess?: () => void;
}

export function LeadForm({ onSuccess }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      companySize: "",
      notes: "",
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Log data (in production, this would be sent to Supabase)
    console.log("Lead data:", data);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    if (onSuccess) {
      onSuccess();
    }
    
    // Reset form after 3 seconds
    setTimeout(() => {
      reset();
      setIsSuccess(false);
    }, 3000);
  };

  if (isSuccess) {
    return (
      <Card className="p-8">
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-[#E6FEF3] flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-[#00C97F]" />
          </div>
          <h3 className="text-[19px] font-bold text-[#07191E] mb-2">
            Merci pour votre intérêt !
          </h3>
          <p className="text-[13px] text-[#4A5A60] leading-[1.55]">
            Nous avons bien reçu vos informations. Notre équipe vous contactera 
            très bientôt sur WhatsApp.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6 lg:p-8">
        <div className="mb-6">
          <h3 className="text-[19px] font-bold text-[#07191E] mb-2">
            Demander une démo
          </h3>
            <p className="text-[12px] text-[#7A8A90] leading-[1.55]">
            Remplissez ce formulaire et notre équipe vous recontactera sous 24h.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              label="Prénom"
              required
              {...register("firstName")}
              error={errors.firstName?.message}
              placeholder="Jean"
            />
            <Input
              label="Nom"
              required
              {...register("lastName")}
              error={errors.lastName?.message}
              placeholder="Kouadio"
            />
          </div>

          <Input
            label="E-mail professionnel"
            type="email"
            required
            {...register("email")}
            error={errors.email?.message}
            placeholder="jean@entreprise.com"
          />

          <Input
            label="Téléphone (WhatsApp)"
            type="tel"
            required
            {...register("phone")}
            error={errors.phone?.message}
            placeholder="+225 XX XX XX XX"
          />

          <Input
            label="Nom de l'entreprise"
            required
            {...register("companyName")}
            error={errors.companyName?.message}
            placeholder="Entreprise SA"
          />

          <Select
            label="Taille de l'entreprise"
            required
            options={COMPANY_SIZES}
            placeholder="Sélectionnez..."
            {...register("companySize")}
            error={errors.companySize?.message}
          />

          <div className="pt-2">
            <Button
              type="submit"
              size="lg"
              className="w-full"
              isLoading={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer ma demande
                </>
              )}
            </Button>
          </div>

          <p className="text-[10px] text-[#7A8A90] text-center leading-[1.5]">
            En soumettant ce formulaire, vous acceptez d&apos;être contacté par notre équipe. 
            Vos données sont protégées et ne seront jamais partagées.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
