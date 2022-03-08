const { shield, rule, and, or } = require('graphql-shield')

const isAdmin = rule()(async (parent, args, ctx, info) => {
    console.log(args)
  return ctx.user.role_name === 'admin'
})

const isEmployee = rule()(async (parent, args, ctx, info) => {
  return ctx.user.role_name === 'employee'
})

// const isOwner = rule()(async (parent, args, ctx, info) => {
//   return ctx.user.items.some(id => id === parent.id)
// })

const permissions = shield({
  Query: {
    users: isAdmin
  },
//   Mutation: {
//     createBlogPost: or(isAdmin, and(isOwner, isEditor)),
//   },
//   User: {
//     secret: isOwner,
//   },
})

module.exports = permissions