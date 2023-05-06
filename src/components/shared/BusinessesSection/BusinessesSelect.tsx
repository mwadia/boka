import Select, { OptionProps } from 'react-select';

const BusinessesSelect = ({ services }: any) => {
  const options = services.map((service: any) => ({
    value: service.nameEn,
    label: service.nameEn,
  }));

  const defaultValueIndex = Math.floor(Math.random() * options.length);
  const defaultValue = options[defaultValueIndex];

  interface CustomOptionProps extends OptionProps {
    isSelected: boolean;
  }

  const customStyles = {
    control: (baseStyles: any, state: any) => ({
      ...baseStyles,
      fontSize: '14px',

      backgroundColor: '#FFE6D6',
      borderColor: '#FF914D',
      '&:hover': {
        borderColor: '#FF914D',
      },
      borderRadius: '8px',
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      color: 'black',
      border: 'none', // Remove the border
      borderRadius: '0px',
    }),
    indicatorSeparator: (provided: any, state: any) => ({
      ...provided,
      display: 'none',
    }),
  };

  const customTheme = (theme: any) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: '#FF914D',
      neutral0: 'white',
      neutral20: '#FF914D',
    },
  });

  return (
    <div>
      <Select
        options={options}
        defaultValue={defaultValue}
        theme={customTheme}
        styles={customStyles}
      />
    </div>
  );
};

export default BusinessesSelect;
