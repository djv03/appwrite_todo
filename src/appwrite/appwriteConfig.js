import { Account, Client, Databases} from "appwrite";

const client= new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('646f7b9a8bd0908f555d');

export const account =new Account(client)

//database
export const database =new Databases(client,'646f7c0251686b72b878')