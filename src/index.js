import './styles/main.css';
import _ from 'lodash'; 

console.log(_.join(['Hello', 'Webpack'], ' '));
output: {
  path: path.resolve(__dirname, 'dist')
}