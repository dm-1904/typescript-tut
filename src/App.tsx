
import './App.css'

//let id = 5 JS assumes is is a number
//let id: number = 5 TS knows it is a number
//let company: string = "Acme Corp"
//let isPublished: boolean = true
const ids: number[] = [1,2,3,4,5]
const ids2: string[] = [1,2,3,4,5] //gives an error because the values in [] are not ''
const x: any = "pedro"
const xArr: any[] = ["pedro", 0, true]

interface BusinessPartner {
  name: string;
  creditScore: number;
}

interface UserIdentity {
  readonly id: number; // a readonly value cannot be reassigned
  email: string;
}

type Employee = BusinessPartner & UserIdentity //this creates an 'intersection' of two interfaces

const signContract = (employee: Employee) => {
  return `Contract signed by ${employee.name} with email: ${employee.email}`
}

interface UserInterface {
  id: number,
  name: string,
  age: number,
  optional?: number, //the ? makes it optional and will not throw an error if not used in the assigned obj
  greet(message: string) : string;

}

const User: UserInterface = {
  id: 2,
  name: "Damon",
  age: '36',
  greet(message) {
    return message
  }
}

//enum for example could be for: unauthorized, user doesn't exist, wrong credentials, internal

enum LoginError {
  Unauthorized = "unauthorized",
  NoUser = "no user",
  WrongCredentials = "wrong credentials",
  Internal = "internal",
}


const printErrorMsg = (error: LoginError) => {
  if (error === LoginError.Unauthorized) return "User not authorized"
  if (error === LoginError.NoUser) return "No user was found with that username."
  if (error === LoginError.WrongCredentials) return "Wrong username or password."
  if (error === LoginError.Internal) return "Internal Error."
}

//Generics

class StorageContainer<T> {
  private contents: T[]

  constructor() {
    this.contents = []
  }
  addItem(item: T): void {
    this.contents.push(item)
  }
  getItem(idx: number): T | undefined {
    return this.contents[idx]
  }
}

const usernames = new StorageContainer<string>()
usernames.addItem("dm_1904")
usernames.addItem("Atreyu")
// console.log(usernames.getItem(0))

function App() {

  type IDFieldType = string | number
  const printID = (id: IDFieldType) => { // | is called a union and lets me pick multiple types for a prop
    return("ID: " + id)
  }
  const concatenateValues = (a: string, b: string): string => {
    return a + b
  }

  return (
    <>
      <div>
        {printErrorMsg(LoginError.WrongCredentials)}
      </div>
      <div>
        {signContract({name: "Damon", creditScore: 760, id: 36, email: "damon.ryon@gmail.com"})}
      </div>
      <div>
        {concatenateValues("Hello ", "World")}
      </div>
      <div>
      {concatenateValues("5", "10")}
      </div>
      <div>
      {User.greet('Hello')}
      </div>
      <div>
        {printID(123)}
      </div>
    </>
  )
}

export default App
