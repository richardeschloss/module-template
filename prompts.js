module.exports = pkg => {
  const prompts = [
    {
      'type': 'string',
      'name': 'name',
      'required': true,
      'message': 'NPM package name'
    }
  ]
  return prompts
}