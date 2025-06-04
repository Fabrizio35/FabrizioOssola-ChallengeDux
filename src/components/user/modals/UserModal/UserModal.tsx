import { useEffect } from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema, UserFormType } from '@/schemas/user.schema'
import type { User } from '@/types'
import { createUser, updateUser, deleteUser } from '@/services/userService'
import { ESTADOS, SECTORES } from './modalData'
import CloseModalButton from './CloseModalButton'
import toast from 'react-hot-toast'

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
      <div
        className="flex align-items-center justify-content-between px-4"
        style={{ backgroundColor: '#0763E7' }}
      >
        <h2 className="text-xl font-bold text-white">
          {isEdit ? 'Editar usuario' : 'Nuevo usuario'}
        </h2>

        <div className="flex align-items-center">
          {isEdit && (
            <Button
              type="button"
              icon="pi pi-trash"
              severity="danger"
              className="p-button-text text-white"
              style={{ background: 'transparent', border: 'none' }}
              onClick={handleDelete}
              disabled={isSubmitting}
            />
          )}
          <CloseModalButton version="icon" onHide={onHide} />
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-fluid flex flex-column gap-5 p-4"
      >
        {/* Usuario */}
        <div className="p-field">
          <label htmlFor="usuario" className="font-semibold text-lg">
            Nombre
          </label>
          <InputText
            id="usuario"
            {...register('usuario')}
            className="mt-2"
            autoComplete="off"
            placeholder="Ingrese el nombre de usuario"
          />
          {errors.usuario && (
            <small className="p-error">{errors.usuario.message}</small>
          )}
        </div>

        {/* Estado */}
        <div className="p-field">
          <label htmlFor="estado" className="font-semibold text-lg">
            Estado
          </label>
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
          {errors.estado && (
            <small className="p-error">{errors.estado.message}</small>
          )}
        </div>

        {/* Sector */}
        <div className="p-field">
          <label htmlFor="sector" className="font-semibold text-lg">
            Sector
          </label>
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
          {errors.sector && (
            <small className="p-error">{errors.sector.message}</small>
          )}
        </div>

        {/* Botones */}
        <div className="flex align-items-center gap-2 mx-auto">
          <Button
            type="submit"
            label={isEdit ? 'Guardar' : 'Confirmar'}
            icon="pi pi-check"
            className="w-10rem"
            loading={isSubmitting}
            disabled={isSubmitting || !isValid}
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
