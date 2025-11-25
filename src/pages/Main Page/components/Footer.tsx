import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-secondary  border-t border-[#d4d8cc]"
    >
      <div className="lg:mx-8 md:mx-5 mx-3  py-20 grid md:grid-cols-3 gap-16">

        {/* Brand column */}
        <div className="space-y-3">
          <h4 className="text-lg font-medium tracking-tight">Green Sight</h4>
          <p className="text-sm  leading-relaxed max-w-xs">
            Rooted in calm. Designed by nature.
            A collection where living design meets quiet luxury.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-3 md:items-center">
          <h5 className="text-sm  uppercase tracking-wide">Explore</h5>
          <nav className="flex flex-col gap-2 text-sm text-[#4a4f46]/80">
            <a href="/collections/plants" className="hover:text-secondary-foreground transition-colors">Products</a>
            <a href="/about" className="hover:text-secondary-foreground transition-colors">About</a>
            <a href="/journal" className="hover:text-secondary-foreground transition-colors">Journal</a>
            <a href="/contact" className="hover:text-secondary-foreground transition-colors">Contact</a>
          </nav>
        </div>

        {/* Social / Contact */}
        <div className="flex flex-col items-start md:items-end space-y-3">
          <h5 className="text-sm  uppercase tracking-wide">Connect</h5>
          <div className="flex gap-5 text-sm text-[#4a4f46]/70">
            <a href="#" className="hover:text-secondary-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-secondary-foreground transition-colors">Pinterest</a>
          </div>
          <p className="text-xs  mt-4">hello@greensight.com</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#d4d8cc] to-transparent" />

      {/* Bottom line */}
      <div className="text-center text-xs  py-6">
        © {new Date().getFullYear()} Green Sight — All Rights Resereved.
      </div>
    </motion.footer>
  )
}
