"use client";
import { ChevronRight, Loader2 } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

/* 
  Replace these imports with your own UI library, or just use standard <label>, <input>, <textarea>, <button> 
  if you don't have them.
*/
const Label = (props: any) => <label {...props} />;
const Input = (props: any) => <input {...props} className="border rounded p-2 w-full" />;
const Textarea = (props: any) => <textarea {...props} className="border rounded p-2 w-full" />;
const Button = (props: any) => <button {...props} className="bg-blue-600 text-white rounded p-2 w-full" />;

function cn(...args: string[]) {
  return args.join(" ");
}

const ContactForm = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [toast, setToast] = React.useState<{ type: "success" | "error"; message: string } | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setToast({ type: "success", message: "Thank you! I'll get back to you as soon as possible." });
      setFullName("");
      setEmail("");
      setMessage("");
      setTimeout(() => router.push("/"), 1500);
    } catch (err) {
      setToast({ type: "error", message: "Something went wrong! Please check the fields." });
    }
    setLoading(false);
  };

  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
      <h2 className="mb-4 text-2xl font-bold text-center">Contact Me</h2>
      {toast && (
        <div
          className={cn(
            "p-3 mb-3 rounded text-center",
            toast.type === "success" ? "bg-green-200 text-green-900" : "bg-red-200 text-red-900"
          )}
        >
          {toast.message}
        </div>
      )}
      <div className="mb-4">
        <Label htmlFor="fullname">Full name</Label>
        <Input
          id="fullname"
          placeholder="Your Name"
          type="text"
          required
          value={fullName}
          onChange={(e: any) => setFullName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="you@example.com"
          type="email"
          required
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          placeholder="Tell me about your project..."
          required
          value={message}
          rows={6}
          onChange={(e: any) => setMessage(e.target.value)}
        />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? (
          <span className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
          </span>
        ) : (
          <span className="flex items-center justify-center">
            Send Message <ChevronRight className="w-4 h-4 ml-4" />
          </span>
        )}
      </Button>
      <p className="text-sm text-muted-foreground mt-2 text-center">
        I&apos;ll never share your data with anyone else. Pinky promise!
      </p>
    </form>
  );
};

export default ContactForm;