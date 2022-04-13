import React, { useEffect, useState } from 'react';
import Actions from '../../components/Actions/Actions';
import ColorBoard from '../../components/ColorBoard/ColorBoard';
import { Loader } from '../../components/UI';

function Home() {
  const [color1, setColor1] = useState('#5039CC');
  const [color2, setColor2] = useState('#b5cc39');
  const [search, setSearch] = useState('#b5cc39');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const url = `https://api.codetabs.com/v1/proxy/?quest=https://color.serialif.com/hex=${
      search.split('#')[1]
    }`;
    const controller = new AbortController();
    const { signal } = controller;
    fetch(url, { signal })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setColor2(data.base.hex.value);
        setColor1(data.complementary.hex.value);
      })
      .catch((err) => setError(err.response));
    return () => controller.abort();
  }, [search]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ColorBoard
            actions={{
              color1,
              color2,
              search,
              setSearch,
            }}
          />
          <div className="actions-outer">
            <div className="actions">
              <Actions color={color1} />
              <Actions color={color2} />
            </div>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      )}
      <div> </div>
    </>
  );
}

export default Home;
