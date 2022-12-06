import Swal2 from "@/helpers/Swal2"
import vaultBoy from '@/images/vault-boy.png'
import happyCat from '@/images/cat.gif'

export const AlertGood = Swal2.mixin({
  title: 'Bien Hecho',
  imageUrl: vaultBoy,
  imageWidth: 100,
  imageHeight: 100,
  text: "Sigue así, tu puedes c:",
}) 

export const AlertCompleted = Swal2.mixin({
  title: '¡¡FELICIDADES!!',
  text: "Completaste todas tus actividades diarias c:",
  imageUrl: happyCat,
  imageWidth: 100,
  imageHeight: 100,
})