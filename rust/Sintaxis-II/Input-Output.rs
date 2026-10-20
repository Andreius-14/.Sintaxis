fn main() {
    println!("Por favor introduce tu nombre");

    //rapido
    // let mut nombre: &str =
    // Mas opiciones
    // let mut nombre: String = String::from("")
    // let mut nombre: String =  "";
    let mut nombre: String = String::new();

    std::io::stdin().read_line(&mut nombre).unwrap();

    println!("Hola. {}", nombre);
}
