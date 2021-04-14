import ColorPicker from 'rc-color-picker';

function changeHandler(colors) {
  console.log(colors);
}

const Anim = () => (
  <div style={{ margin: '20px 20px 20px', textAlign: 'center' }}>
    <ColorPicker
      animation="slide-up"
      color={'#36c'}
      onChange={changeHandler}
    />
  </div>
);

export default Anim