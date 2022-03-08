const isPrivated = async (resolve, parent, args, ctx, info) => {
    throw new Error(`access privated field`)
  }

 const privateFields = {
  User: {
    password: isPrivated,
  }
} 
  
  module.exports  = privateFields