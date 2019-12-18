var priceSynonyms = ['custo', 'montate', 'valia', 'valor', 'preco', 'preço', 'value', 'price']
var nameSynonyms = ['nome', 'titulo', 'name', 'title']
var quantitySynonyms = ['qnt', 'quantidade', 'estoque', 'quantity', 'stock']

var findPriceField = (columnsNames) => {
  let data = null
  columnsNames.map((name, index) => {
    priceSynonyms.map((synonym) => {
      if(name.toLowerCase() === synonym){
        data = {index, synonym, default:'price'}
      }
    })
  })
  return data
}

var findNameField = (columnsNames) => {
  let data = null
  columnsNames.map((name, index) => {
    nameSynonyms.map((synonym) => {
      if(name.toLowerCase() === synonym){
        data = {index, synonym, default:'name'}
      }
    })
  })
  return data
}

var findQuantityField = (columnsNames) => {
let data = null
  columnsNames.map((name, index) => {
    quantitySynonyms.map((synonym) => {
      if(name.toLowerCase() === synonym){
        data = {index, synonym, default:'quantity'}
      }
    })
  })
  return data
}

module.exports = {findPriceField, findNameField, findQuantityField}