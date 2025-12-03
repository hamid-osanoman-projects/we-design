import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser"; // IMPORT EMAILJS
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  service: z.string().min(1, "Please select a service"),
  location: z.string().min(2, "Please enter project location"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacy: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset, // Added reset to clear form after success
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      privacy: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Prepare the data to match the {{variables}} in your EmailJS template
    const templateParams = {
      user_name: data.fullName,
      user_email: data.email,
      phone: data.phone,
      service: data.service,
      location: data.location,
      message: data.message,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status !== 200) {
        throw new Error("Failed to send message");
      }

      toast.success("Thank you! We will contact you within 24 hours.");
      reset(); // Clear the form
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try calling us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 lg:py-20 font-tajawal bg-white mt-16">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* LEFT SIDE INFO */}
              <div className="space-y-8">
                {/* Title */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-bold mb-3 text-gray-600">
                    Get In Touch
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Ready to transform your space? Contact us today for a
                    consultation.
                  </p>
                </div>

                {/* CONTACT ITEMS */}
                <div className="space-y-6">
                  {/* OFFICE */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-[#F28C28]/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#F28C28]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-tajawal text-gray-600 mb-1">
                        Office
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Ghoubra near Bank Muscat <br />
                        P.O. Box 1127 P.C 130 <br />
                        Muscat, Oman
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-[#F28C28]/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#F28C28]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-tajawal text-gray-600">
                        Phone
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base text-tajawal text-gray-600">
                        <a
                          href="tel:+96898502850"
                          className="hover:text-[#F28C28] transition"
                        >
                          +968 98502850
                        </a>
                        <br />
                        Fax: +968 24499802
                      </p>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-[#F28C28]/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#F28C28]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-tajawal text-gray-600">
                        Email
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base break-words text-tajawal text-gray-600">
                        <a
                          href="mailto:milad@wedesign-om.com"
                          className="hover:text-[#F28C28] transition"
                        >
                          milad@wedesign-om.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* MAP */}
                <div className="rounded-lg overflow-hidden shadow-md h-[260px] sm:h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.084464384087!2d58.40952631498163!3d23.589719684682943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzIzLjAiTiA1OMKwMjQnNDQuOCJF!5e0!3m2!1sen!2som!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="WE DESIGN Office, Muscat Oman"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - FORM */}

              <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl shadow-sm flex flex-col h-full">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                  <span className="text-tajawal text-gray-600">Send Us a </span>
                  <span className="text-[#F28C28]">Message</span>
                </h3>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 flex-1 text-tajawal text-gray-600"
                >
                  {/* NAME */}
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      className="mt-2 border-gray-300 focus:border-[#F28C28]"
                      placeholder="Abdullah"
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>Email *</Label>
                      <Input
                        {...register("email")}
                        className="mt-2 border-gray-300 focus:border-[#F28C28]"
                        placeholder="abdullah@example.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label>Phone *</Label>
                      <Input
                        {...register("phone")}
                        className="mt-2 border-gray-300 focus:border-[#F28C28]"
                        placeholder="+968 XXXXXXXX"
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* SERVICE + LOCATION */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>Service Interested In *</Label>
                      <Select onValueChange={(v) => setValue("service", v)}>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-[#F28C28]">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="interior">
                            Interior Architecture
                          </SelectItem>
                          <SelectItem value="furniture">
                            Custom Furniture
                          </SelectItem>
                          <SelectItem value="fitout">Fit-Out</SelectItem>
                          <SelectItem value="landscape">
                            Landscape Design
                          </SelectItem>
                          <SelectItem value="kitchen">
                            Kitchen & Wardrobes
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label>Project Location *</Label>
                      <Input
                        {...register("location")}
                        className="mt-2 border-gray-300 focus:border-[#F28C28]"
                        placeholder="Muscat, Oman"
                      />
                      {errors.location && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.location.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <Label>Brief Message *</Label>
                    <Textarea
                      {...register("message")}
                      className="mt-2 min-h-[120px] border-gray-300 focus:border-[#F28C28]"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* CHECKBOX */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={watch("privacy")}
                      onCheckedChange={(checked) =>
                        setValue("privacy", checked as boolean)
                      }
                    />
                    <Label className="text-sm leading-relaxed cursor-pointer">
                      I accept the terms & agree to receive communication from
                      WE DESIGN.
                    </Label>
                  </div>
                  {errors.privacy && (
                    <p className="text-sm text-red-500">
                      {errors.privacy.message}
                    </p>
                  )}

                  {/* SUBMIT */}
                  <Button
                    type="submit"
                    className="w-full bg-[#F28C28] hover:bg-[#d9751f] text-white font-semibold py-3 rounded-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {/* SOCIAL MEDIA - ONE SMALL LINE */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-3 text-black text-sm color-gray-600">
                    <span className="text-tajawal text-gray-600">
                      Follow Us On
                    </span>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      className="opacity-70 hover:opacity-100 transition color-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 
        0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 
        0 3 1.346 3 3v10c0 1.654-1.346 
        3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 
        1.346-3 3-3h10zm-5 3c-2.757 0-5 2.243-5 
        5s2.243 5 5 5 5-2.243 5-5-2.243-5-5zm0 
        2c1.654 0 3 1.346 3 3s-1.346 3-3 
        3-3-1.346-3-3 1.346-3 3-3zm4.5-4a1.5 
        1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                        />
                      </svg>
                    </a>

                    {/* TikTok */}
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      className="opacity-70 hover:opacity-100 transition color-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12.525 2h3.098c.132 1.043.49 1.91 1.074 
        2.602.584.692 1.41 1.14 2.48 1.346v3.157c-.878-.093-1.677-.29-2.398-.593a6.83 
        6.83 0 0 1-1.893-1.19v7.663c0 1.31-.305 
        2.474-.914 3.49a6.257 6.257 0 0 1-2.457 
        2.297c-1.05.556-2.257.833-3.62.833-1.05 
        0-2.03-.176-2.94-.528a6.364 6.364 0 0 
        1-2.146-1.42A6.59 6.59 0 0 1 2 16.94c0-1.274.32-2.47.96-3.59a6.664 
        6.664 0 0 1 2.602-2.468c1.13-.593 2.377-.89 
        3.74-.89.41 0 .86.035 1.346.105v3.287a3.62 
        3.62 0 0 0-.686-.07c-.73 0-1.39.17-1.98.51a3.49 
        3.49 0 0 0-1.346 1.414c-.31.61-.463 1.29-.463 
        2.04 0 .78.167 1.477.5 2.092.333.616.797 
        1.093 1.39 1.43.594.34 1.274.51 2.04.51.756 
        0 1.423-.158 2-.473a3.41 3.41 0 0 0 1.414-1.31c.333-.58.5-1.22.5-1.92V2z"
                        />
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      className="opacity-70 hover:opacity-100 transition color-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 12c0-5.523-4.477-10-10-10S2 
        6.477 2 12c0 4.991 3.657 9.128 8.438 
        9.878v-6.987H7.898v-2.89h2.54V9.845c0-2.506 
        1.492-3.89 3.777-3.89 1.094 0 2.238.195 
        2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 
        1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 
        21.128 22 16.991 22 12"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}