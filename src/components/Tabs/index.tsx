import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { match } from 'ts-pattern';

import { ChangeHandler } from '@aiera/client-sdk/types';
import './styles.css';

interface TabOption<T> {
    value: T;
    label: string;
}

type TabKind = 'button' | 'line';

/**
 * @notExported
 */
interface TabsProps<T> {
    children?: ReactNode;
    className?: string;
    onChange?: ChangeHandler<T>;
    options?: TabOption<T>[];
    value?: TabOption<T>['value'];
    kind?: TabKind;
}

export const Tabs = <T extends string | number>(props: TabsProps<T>): ReactElement => {
    const { onChange, options = [], value, kind = 'button', className = '' } = props;
    const getClasses = (val: string | number) =>
        match(kind)
            .with('button', () =>
                classNames('py-2', 'px-3', 'text-sm', 'cursor-pointer', 'rounded-lg', {
                    'bg-gray-100': val === value,
                    'font-semibold': val === value,
                    tab__option: true,
                    'tab__option--selected': val === value,
                })
            )
            .with('line', () =>
                classNames('relative', 'text-sm', 'h-6', 'flex', 'mr-3', 'pb-0.5', 'overflow-hidden', {
                    'cursor-pointer': val !== value,
                    'text-gray-400': val !== value,
                    'text-black': val === value,
                    'font-semibold': val === value,
                    'hover:text-gray-500': val !== value,
                    'active:text-gray-800': val !== value,
                    tab__option: true,
                    'tab__option--selected': val === value,
                })
            )
            .exhaustive();

    return (
        <div className={`flex tab relative ${className}`}>
            {options.map((option) => (
                <div
                    key={`tab-option-${option.value}`}
                    className={getClasses(option.value)}
                    onClick={(event) => onChange && onChange(event, { value: option.value })}
                >
                    {option.label}
                    {kind === 'line' && (
                        <div
                            className={classNames(
                                'h-0.5',
                                'bg-blue-600',
                                'absolute',
                                'left-0',
                                'right-0',
                                'duration-200',
                                'ease-in-out',
                                'rounded-t-sm',
                                {
                                    'bottom-0': option.value === value,
                                    '-bottom-0.5': option.value !== value,
                                }
                            )}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};
