import { DropDownButtonComponent} from '@syncfusion/ej2-react-splitbuttons';
import './App.css';
function App() {
  let items = [
    {
      text: 'Edit'
    },
    {
      text: 'Delete',
      disabled: true
    },
    // {
    //   separator: true
    // },
    {
      text: 'Mark as Read'
    },
    {
      text: 'Like'
    },
    {
      text: 'Share',
      url: 'https://www.google.co.in/search?q=twitter'
    },
  ];
  return (
    <div className="App">
      <DropDownButtonComponent items={items}
      content='Options' iconCss='e-ddb-icons e-menu' iconPosition='Left'
      cssClass='e-popup-items li e-caret-hide' //disabled={true}
 >
      </DropDownButtonComponent>
    </div>
  );
}
export default App;