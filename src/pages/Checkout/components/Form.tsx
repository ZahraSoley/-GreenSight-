import { Button } from "@/components/ui/button";

export default function CheckoutForm({
  register,
  handleSubmit,
  errors,
  isSubmitting,
  activebtn,
  setActivebtn,
  submit,
}: any) {
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="border rounded-sm bg-white/80 backdrop-blur-sm shadow-sm px-4 py-6 md:px-6 md:py-8 flex flex-col gap-6"
    >
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-medium tracking-wide">
          Customer information
        </h2>
        <p className="text-xs text-muted-foreground">
          We&apos;ll only use this information to process your order.
        </p>
      </div>

      {/* Name + Email */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fullName" className="text-sm">
            Full name<span className="text-red-500"> *</span>
          </label>
          <input
            id="fullName"
            {...register("fullName")}
            type="text"
            className="h-10 rounded-sm border px-3 text-sm outline-none 
            focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
            placeholder="Jane Doe"
          />
          {errors.fullName && (
            <span className="text-red-800 text-xs">{errors.fullName.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm">
            Email<span className="text-red-500"> *</span>
          </label>
          <input
            id="email"
            {...register("email")}
            type="text"
            className="h-10 rounded-sm border px-3 text-sm outline-none 
            focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
            placeholder="you@example.com"
          />
          {errors.email && (
            <span className="text-red-800 text-xs">{errors.email.message}</span>
          )}
        </div>
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm">Phone number</label>
        <input
          id="phone"
          type="text"
          {...register("phone")}
          className="h-10 rounded-sm border px-3 text-sm outline-none 
          focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
          placeholder="+49 ..."
        />
        {errors.phone && (
          <span className="text-red-800 text-xs">{errors.phone.message}</span>
        )}
      </div>

      {/* Address Section */}
      <div className="flex flex-col gap-3">
        {/* Address Line 1 */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="addressLine1" className="text-sm">
            Address line 1<span className="text-red-500"> *</span>
          </label>
          <input
            id="addressLine1"
            type="text"
            {...register("addressLine1")}
            className="h-10 rounded-sm border px-3 text-sm outline-none 
            focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
            placeholder="Street and house number"
          />
          {errors.addressLine1 && (
            <span className="text-red-800 text-xs">
              {errors.addressLine1.message}
            </span>
          )}
        </div>

        {/* Address Line 2 */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="addressLine2" className="text-sm">
            Address line 2 (optional)
          </label>
          <input
            id="addressLine2"
            type="text"
            {...register("addressLine2")}
            className="h-10 rounded-sm border px-3 text-sm outline-none 
            focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
            placeholder="Apartment, floor, etc."
          />
          {errors.addressLine2 && (
            <span className="text-red-800 text-xs">
              {errors.addressLine2.message}
            </span>
          )}
        </div>

        {/* Postal Code, City, Country */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Postal code */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="postalCode" className="text-sm">
              Postal code<span className="text-red-500"> *</span>
            </label>
            <input
              id="postalCode"
              type="text"
              {...register("postalCode")}
              className="h-10 rounded-sm border px-3 text-sm outline-none 
              focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
              placeholder="12345"
            />
            {errors.postalCode && (
              <span className="text-red-800 text-xs">
                {errors.postalCode.message}
              </span>
            )}
          </div>

          {/* City */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="city" className="text-sm">
              City<span className="text-red-500"> *</span>
            </label>
            <input
              id="city"
              type="text"
              {...register("city")}
              className="h-10 rounded-sm border px-3 text-sm outline-none 
              focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
              placeholder="Berlin"
            />
            {errors.city && (
              <span className="text-red-800 text-xs">{errors.city.message}</span>
            )}
          </div>

          {/* Country */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="country" className="text-sm">Country</label>
            <input
              id="country"
              type="text"
              {...register("country")}
              className="h-10 rounded-sm border px-3 text-sm outline-none 
              focus-visible:ring-2 focus-visible:ring-secondary focus-visible:border-primary transition"
            />
            {errors.country && (
              <span className="text-red-800 text-xs">{errors.country.message}</span>
            )}
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="flex flex-col gap-3 pt-2 border-t md:pt-6">
        <h2 className="text-sm font-medium tracking-wide">Payment method</h2>
        <p className="text-xs text-muted-foreground">
          For this demo, payment is not processed. Choose any option to continue.
        </p>

        <div className="grid gap-3 md:grid-cols-3">
          {["Credit Card", "PayPal", "Bank Transfer"].map((method) => (
            <button
              type="button"
              key={method}
              onClick={() => setActivebtn(method)}
              className={`h-10 rounded-sm border text-sm px-3 flex items-center justify-center
              hover:border-primary hover:bg-primary/10 transition cursor-pointer
                ${activebtn === method ? "border-primary bg-primary/10" : ""}`}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center justify-between pt-4 gap-4 flex-wrap">
        <p className="text-xs text-muted-foreground">
          By placing your order, you agree to our terms and conditions.
        </p>

        <Button type="submit" disabled={isSubmitting} className="rounded-sm px-6">
          {isSubmitting ? "Placing order..." : "Place order"}
        </Button>
      </div>
    </form>
  );
}
