import ColorPicker from 'rc-color-picker';

function changeHandler(colors) {
  console.log(colors);
}

const CustomTrigger = () => (
  <div style={{ textAlign: 'center' }}>
    <ColorPicker
      color={'#36c'}
      onChange={changeHandler}
    >
      <span className="react-custom-trigger">choose color</span>
    </ColorPicker>
  </div>
);

export default CustomTrigger