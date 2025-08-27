import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/validations/ContactUs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "../ui/checkbox";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      privacy: false,
    },
  });

  const services = [
    { value: "internet", label: "Internet hogar" },
    { value: "television", label: "Televisión por cable" },
    { value: "combo", label: "Combo Internet + TV" },
    { value: "internet_empresarial", label: "Servicios empresariales" },
    { value: "otros", label: "Otros servicios" },
  ];

  const handleFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simular envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted with data:", data);
      setIsSubmitted(true);

      // Resetear el estado después de 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="w-full py-8 md:py-12 lg:py-16 bg-gradient-to-br"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-foreground mb-3 md:mb-4">
            Contáctanos
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes dudas o necesitas asesoría? Completa el formulario y te
            contactaremos a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Información de contacto */}
          <Card className="lg:col-span-1">
            <CardContent className="p-4 md:p-6 space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-secondary-foreground mb-4 md:mb-6">
                Información de contacto
              </h3>

              <div className="flex items-start">
                <div className="bg-background p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                  <Phone className="h-4 w-4 md:h-6 md:w-6 text-[#1460ff]" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-foreground text-sm md:text-base">
                    Teléfono
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    +57 (320) 945-7068
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-background p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                  <Mail className="h-4 w-4 md:h-6 md:w-6 text-[#1460ff]" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-foreground text-sm md:text-base">
                    Email
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    info@adprotv.co
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-background p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                  <MapPin className="h-4 w-4 md:h-6 md:w-6 text-[#1460ff]" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-foreground text-sm md:text-base">
                    Dirección
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Calle 38 C sur # 89 - 41, Patio Bonito, Bogota
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-background p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                  <MessageCircle className="h-4 w-4 md:h-6 md:w-6 text-[#1460ff]" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-foreground text-sm md:text-base">
                    Horario de atención
                  </h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Lun-Vie: 8:00 AM - 5:00 PM
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Sáb: 8:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formulario */}
          <Card className="lg:col-span-2">
            <CardContent className="p-4 md:p-6">
              <CardTitle className="text-xl md:text-2xl font-bold text-secondary-foreground mb-4 md:mb-6">
                Envíanos un mensaje
              </CardTitle>

              {isSubmitted ? (
                <div className="bg-green-100 dark:bg-green-950 p-4 rounded-lg text-center mb-6">
                  <p className="text-green-700 font-medium">
                    ¡Mensaje enviado con éxito! Te contactaremos dentro de las
                    próximas 24 horas.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleFormSubmit)}
                    className="space-y-4 md:space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2 lg:col-span-1">
                            <FormLabel className="text-sm md:text-base">
                              Nombre completo *
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                className="w-full text-sm md:text-base"
                                placeholder="Tu nombre completo"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs md:text-sm" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2 lg:col-span-1">
                            <FormLabel className="text-sm md:text-base">
                              Correo *
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                className="w-full text-sm md:text-base"
                                placeholder="tu.email@ejemplo.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs md:text-sm" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2 lg:col-span-1">
                            <FormLabel className="text-sm md:text-base">
                              Teléfono *
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                className="w-full text-sm md:text-base"
                                placeholder="+1 (234) 567-8900"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs md:text-sm" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm md:text-base">
                            Servicio de interés *
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full text-sm md:text-base">
                                <SelectValue placeholder="Selecciona un servicio" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem
                                  key={service.value}
                                  value={service.value}
                                  className="text-sm md:text-base"
                                >
                                  {service.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs md:text-sm" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm md:text-base">
                            Cuéntanos cómo podemos ayudarte... *
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              className="w-full text-sm md:text-base min-h-[120px]"
                              placeholder="Describe tu consulta o necesidad..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-xs md:text-sm" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="privacy"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 md:p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="mt-0.5"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm md:text-base cursor-pointer">
                              Acepto la política de privacidad y el tratamiento
                              de mis datos
                            </FormLabel>
                            <FormDescription className="text-xs md:text-sm">
                              Tus datos serán utilizados únicamente para
                              contactarte y no serán compartidos con terceros.
                            </FormDescription>
                          </div>
                          <FormMessage className="text-xs md:text-sm" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-sm md:text-base py-3 md:py-4"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
