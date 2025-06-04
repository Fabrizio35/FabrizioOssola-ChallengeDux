import { useEffect } from 'react'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema, UserFormType } from '@/schemas/user.schema'
import type { User } from '@/types'
import { createUser, updateUser, deleteUser } from '@/services/userService'
import { ESTADOS, SECTORES } from './modalData'
import CloseModalButton from './buttons/CloseModalButton'
import FormField from './FormField'
import toast from 'react-hot-toast'
import ModalHeader from './ModalHeader'
import SubmitButton from './buttons/SubmitButton'

interface UserModalProps {
  visible: boolean
  onHide: () => void
  onSuccess: () => void
  user?: User | null
  sector: string
}

export default function UserModal({
  visible,
  onHide,
  onSuccess,
  user,
  sector,
}: UserModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<UserFormType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      usuario: '',
      estado: undefined,
      sector: undefined,
    },
    mode: 'onChange',
  })

  const isEdit = !!user

  // Crear o actualizar usuario
  const onSubmit = async (data: UserFormType) => {
    try {
      if (isEdit && user) {
        await updateUser({
          userId: user.id,
          user: { ...user, ...data },
          sector: sector,
        })

        toast.success('Usuario actualizado correctamente')
      } else {
        const randomId = () => Math.floor(Math.random() * 1000000).toString()

        await createUser({
          user: { id: randomId(), ...data },
          sector: sector,
        })

        toast.success('Usuario creado correctamente')
      }
      onSuccess()
      onHide()
    } catch (error) {
      console.error(error)
      toast.error('Ocurrió un error al guardar el usuario')
    }
  }

  // Eliminar usuario
  const handleDelete = async () => {
    try {
      if (user) {
        await deleteUser({ userId: user.id, sector })
        toast.success('Usuario eliminado correctamente')
        onSuccess()
        onHide()
      }
    } catch (error) {
      console.error(error)
      toast.error('Ocurrió un error al eliminar el usuario')
    }
  }

  // Resetear formulario al abrir el modal y al cambiar el usuario
  useEffect(() => {
    if (user) {
      reset({
        usuario: user.usuario,
        estado: user.estado,
        sector: user.sector,
      })
    } else {
      reset({ usuario: '', estado: undefined, sector: undefined })
    }
  }, [user, reset])

  return (
    <Dialog
      modal
      header={null}
      visible={visible}
      onHide={onHide}
      closable={false}
      contentStyle={{ padding: 0, margin: 0, width: '1100px' }}
    >
      <ModalHeader
        handleDelete={handleDelete}
        isEdit={isEdit}
        onHide={onHide}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-fluid flex flex-column gap-5 p-4"
      >
        {/* Usuario */}
        <FormField label="Nombre" id="usuario" error={errors.usuario?.message}>
          <InputText
            id="usuario"
            {...register('usuario')}
            autoComplete="off"
            placeholder="Ingrese el nombre de usuario"
          />
        </FormField>

        {/* Estado */}
        <FormField label="Estado" id="estado" error={errors.estado?.message}>
          <Dropdown
            id="estado"
            options={ESTADOS}
            value={watch('estado')}
            onChange={(e) =>
              setValue('estado', e.value, {
                shouldValidate: true,
                shouldTouch: true,
              })
            }
            className="mt-2"
            placeholder="Seleccione estado"
          />
        </FormField>

        {/* Sector */}
        <FormField label="Sector" id="sector" error={errors.sector?.message}>
          <Dropdown
            id="sector"
            options={SECTORES}
            value={watch('sector')}
            onChange={(e) =>
              setValue('sector', e.value, {
                shouldValidate: true,
                shouldTouch: true,
              })
            }
            className="mt-2"
            placeholder="Seleccione sector"
          />
        </FormField>

        {/* Botones */}
        <div className="flex align-items-center gap-2 mx-auto">
          <SubmitButton
            isEdit={isEdit}
            isSubmitting={isSubmitting}
            isValid={isValid}
          />
          <CloseModalButton
            version="text"
            onHide={onHide}
            isSubmitting={isSubmitting}
          />
        </div>
      </form>
    </Dialog>
  )
}
