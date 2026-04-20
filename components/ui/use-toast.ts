"use client";

export type ToastProps = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

export function useToast() {
  return {
    toast: (props: ToastProps) => {
      // Minimal stub so the project runs out of the box.
      // Replace with shadcn/ui toast (Toaster + toast) if desired.
      // eslint-disable-next-line no-console
      console.log("toast:", props);
    }
  };
}
