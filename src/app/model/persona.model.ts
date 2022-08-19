export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    telefono: string;
    ciudad: string;
    edad: string;
    email: string;
    img: string;

    constructor(nombre: string,apellido: string,telefono: string,ciudad: string,edad: string,email: string,img: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.edad = edad;
        this.email = email;
        this.img = img;

    }
}