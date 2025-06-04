interface FormFieldProps {
  label: string
  id: string
  error?: string
  children: React.ReactNode
}

const FormField = ({ label, id, error, children }: FormFieldProps) => (
  <div className="p-field">
    <label htmlFor={id} className="font-semibold text-lg">
      {label}
    </label>
    <div className="mt-2">{children}</div>
    {error && <small className="p-error">{error}</small>}
  </div>
)

export default FormField
