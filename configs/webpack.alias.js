const path = require('path')

const alias = {
  components: path.resolve(__dirname, 'src/components/'),
  constants: path.resolve(__dirname, 'src/constants/'),
  containers: path.resolve(__dirname, 'src/containers/'),
  pages: path.resolve(__dirname, 'src/pages/'),
  utils: path.resolve(__dirname, 'src/utils/'),
}

module.exports = alias
