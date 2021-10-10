import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

import useStyles from './styles';

const Select = ({ label, placeholder, disabled, options, selected, setSelected }) => {
  const styles = useStyles({ disabled });

  return (
    <Listbox value={selected} onChange={setSelected} disabled={disabled}>
      <Listbox.Label className={styles.label}>{label}</Listbox.Label>
      <div className="mt-1 relative">
        <Listbox.Button className={styles.button}>
          <span className={styles.name}>{selected.name || placeholder}</span>
          <span className={styles.iconContainer}>
            <SelectorIcon className={styles.icon} aria-hidden="true" />
          </span>
        </Listbox.Button>

        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className={styles.optionsContainer}>
            {options.map((option, index) => (
              <Listbox.Option key={index.toString()} className={({ active }) => styles.active(active)} value={option}>
                {({ selected, active }) => (
                  <>
                    <span className={styles.optionName}>{option.name}</span>

                    {selected ? (
                      <span className={styles.selectedIconContainer(active)}>
                        <CheckIcon className={styles.selectedIcon} aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

Select.propTypes = {
  label: PropTypes.string,
};

Select.defaultProps = {
  label: '',
};

export default Select;
