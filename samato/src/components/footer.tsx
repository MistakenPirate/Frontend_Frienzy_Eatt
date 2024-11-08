import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 dark:text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            © 2024 Eatt. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-primary">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-primary">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-primary">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
