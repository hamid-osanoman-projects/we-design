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
import { Instagram, Facebook, Linkedin } from "lucide-react";


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
  Discuss <span className="text-[#F28C28]">Your Vision</span>
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
                       ONEIC Head Office Building, 2nd Floor <br />
                        Al Khuwair St, 133 <br />
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
                          +968 71119834
                        </a>
                        <br />
                        tel : +968 24488689
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
                          href="mailto:info@wedesignoman.com"
                          className="hover:text-[#F28C28] transition"
                        >
                          info@wedesignoman.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* MAP */}
                <div className="rounded-lg overflow-hidden shadow-md h-[260px] sm:h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2668020236406!2d58.4185879!3d23.5947626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e0150c6a7777d%3A0x17722bb898d9d860!2sWe%20Design%20LLC%20-%20Interior%20Design%20%26%20Construction!5e0!3m2!1sen!2som!4v1765870001789!5m2!1sen!2som"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="We Design LLC - Interior Design & Construction, Muscat Oman"
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
                      placeholder="Meelad"
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
                        placeholder="meelad@example.com"
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
                          <SelectItem value="Construction">
                            Construction
                          </SelectItem>
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

                    <div className="flex items-center gap-4">

  {/* Instagram */}
  <a
    href="https://instagram.com/wedesign_om/"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-70 hover:opacity-100 transition text-gray-600 hover:text-[#F28C28]"
  >
    <Instagram size={18} />
  </a>


  {/* Facebook */}
  <a
    href="https://facebook.com/wedesignoman"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-70 hover:opacity-100 transition text-gray-600 hover:text-[#F28C28]"
  >
    <Facebook size={18} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/we-design-l-l-c"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-70 hover:opacity-100 transition text-gray-600 hover:text-[#F28C28]"
  >
    <Linkedin size={18} />
  </a>

</div>

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