import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from '../UI';

function Menu({
  setLineColor, setLineOpacity, saveCanvas, clearCanvas,
}) {
  return (
    <div className="Menu">
      <Input label="Brush Color" type="color" onAction={setLineColor} />
      <Input
        label="Brush Opacity"
        type="range"
        min="1"
        max="100"
        onAction={setLineOpacity}
      />
      <Button onClick={saveCanvas}>take image</Button>
      <Button onClick={clearCanvas}>clear</Button>
    </div>
  );
}

Menu.propTypes = {
  setLineColor: PropTypes.func.isRequired,
  setLineOpacity: PropTypes.func.isRequired,
  saveCanvas: PropTypes.func.isRequired,
  clearCanvas: PropTypes.func.isRequired,
};

export default Menu;
