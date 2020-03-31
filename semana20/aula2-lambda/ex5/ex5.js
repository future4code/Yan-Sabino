const knex = require("knex");
const v4 = require('uuid');

const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.HOST,
      port: 3306,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
   }
})

const id = v4();

exports.handler = async event => {
   const result = await connection.raw(`
      INSERT INTO personagens (id, nome, nomeDesenho, imagem) VALUES 
      (${id}, ${event.nome}, ${event.nomeDesenho}, ${event.imagem});
   `)

   if(!event.nome || !event.nomeDesenho || !event.imagem){
       return {
           statusCode: 400,
           body: JSON.stringify(undefined)
       }
   }

   return {
      statusCode: 200,
      body: JSON.stringify(result[0][0])
   }
};

/*
{
    "nome": "Daenerys",
    "nomeDesenho": "Game of Thrones",
    "imagem": "https://pbs.twimg.com/profile_images/1117967801652617216/i8PWXebo_400x400.jpg"
}
*/
