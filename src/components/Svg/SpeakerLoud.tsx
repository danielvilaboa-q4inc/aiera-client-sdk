import React, { ReactElement } from 'react';
import classNames from 'classnames';

export function SpeakerLoud({ className, alt = 'SpeakerLoud' }: { className?: string; alt?: string }): ReactElement {
    return (
        <svg
            className={classNames(className, 'fill-current', 'Svg', 'Svg__speakerLoud')}
            width="100%"
            viewBox="0 0 18 14"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>{alt}</title>
            <path d="M9.29833 0C9.12627 0 8.95097 0.0568191 8.80792 0.180887L4.00147 4.37884H2.00073C0.895329 4.37884 0 5.16082 0 6.12628V7.87372C0 8.83918 0.895329 9.62116 2.00073 9.62116H4.00147L8.80792 13.8191C8.95097 13.9441 9.12627 14 9.29833 14C9.65847 14 10.0037 13.7561 10.0037 13.3874V0.612628C10.0037 0.243918 9.65847 0 9.29833 0ZM14.9449 1.79181C14.7455 1.7915 14.5505 1.84326 14.385 1.94042C14.2195 2.03759 14.0911 2.17573 14.0161 2.33713C13.9411 2.49852 13.9231 2.6758 13.9643 2.84621C14.0055 3.01662 14.1041 3.17239 14.2474 3.29352C16.6002 5.34843 16.6 8.65251 14.2474 10.7065C14.1514 10.787 14.0748 10.8834 14.0219 10.9901C13.9691 11.0968 13.9412 11.2117 13.9399 11.3279C13.9385 11.4442 13.9638 11.5595 14.0141 11.6671C14.0644 11.7747 14.1388 11.8725 14.2329 11.9547C14.327 12.0369 14.4389 12.1019 14.5622 12.1458C14.6854 12.1897 14.8174 12.2118 14.9505 12.2106C15.0836 12.2094 15.2151 12.185 15.3372 12.1389C15.4594 12.0928 15.5698 12.0258 15.662 11.942C18.7794 9.2202 18.7792 4.78061 15.662 2.05802C15.5689 1.97401 15.4575 1.90717 15.3344 1.86144C15.2112 1.81572 15.0788 1.79204 14.9449 1.79181ZM12.1158 4.2645C11.9168 4.26455 11.7223 4.31643 11.5572 4.41351C11.3922 4.5106 11.264 4.64847 11.1891 4.8095C11.1142 4.97054 11.096 5.14743 11.1368 5.31754C11.1777 5.48766 11.2756 5.64328 11.4183 5.76451C12.2086 6.45482 12.2086 7.54518 11.4183 8.23549C11.3252 8.31661 11.2514 8.41294 11.2009 8.51899C11.1505 8.62503 11.1245 8.73872 11.1244 8.85354C11.1243 8.96837 11.1501 9.08208 11.2003 9.1882C11.2505 9.29432 11.3242 9.39076 11.4171 9.47201C11.51 9.55326 11.6203 9.61773 11.7417 9.66173C11.8632 9.70574 11.9933 9.72843 12.1248 9.72849C12.2563 9.72855 12.3865 9.706 12.5079 9.66211C12.6294 9.61822 12.7398 9.55386 12.8328 9.4727C14.3873 8.11501 14.3873 5.88669 12.8328 4.52901C12.7396 4.44531 12.6281 4.37878 12.505 4.33335C12.3818 4.28792 12.2495 4.26451 12.1158 4.2645Z" />
        </svg>
    );
}
