import Typewriter from 'typewriter-effect';

const AppTypewriter = ({
  strings,
}) => {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default AppTypewriter;