import React, { MouseEventHandler, ReactElement } from 'react';
import { DateTime } from 'luxon';

import { ArrowLeft } from '@aiera/client-sdk/components/Svg/ArrowLeft';
import { Button } from '@aiera/client-sdk/components/Button';
import { Input } from '@aiera/client-sdk/components/Input';
import { MagnifyingGlass } from '@aiera/client-sdk/components/Svg/MagnifyingGlass';
import { titleize } from '@aiera/client-sdk/lib/strings';
import { ContentType } from '@aiera/client-sdk/modules/ContentList';
import { ChangeHandler } from '@aiera/client-sdk/types';
import './styles.css';

interface ContentSharedProps {
    body?: ReactElement | string;
    companyIdentifier?: string;
    contentType: ContentType; // this should be generated by the server
    date?: DateTime | string;
    exchangeName?: string;
    onBack?: MouseEventHandler;
    onChangeSearchTerm?: ChangeHandler<string>;
    searchTerm?: string;
    sourceName?: string;
    title?: string;
}

/** @notExported */
interface ContentUIProps extends ContentSharedProps {}

export function ContentUI(props: ContentUIProps): ReactElement {
    const {
        body,
        companyIdentifier,
        contentType,
        date,
        exchangeName,
        onBack,
        onChangeSearchTerm,
        searchTerm,
        sourceName,
        title,
    } = props;
    return (
        <div className="h-full flex flex-col content">
            <div className="flex flex-col pl-3 pr-3 pt-3 shadow-3xl content__header">
                <div className="flex items-center mb-3">
                    {onBack && (
                        <Button className="mr-2" onClick={onBack}>
                            <ArrowLeft className="fill-current text-black w-3.5 z-1 relative mr-2 group-active:fill-current group-active:text-white" />
                            {titleize(ContentType[contentType])}
                        </Button>
                    )}
                    {contentType === ContentType.news && (
                        <Input
                            icon={<MagnifyingGlass />}
                            name="search"
                            placeholder="Search Content..."
                            value={searchTerm}
                            onChange={onChangeSearchTerm}
                        />
                    )}
                </div>
            </div>
            {companyIdentifier && (
                <div className="flex items-center pl-5 pr-5 pt-5 text-sm">
                    <span className="font-bold pr-1 text-blue-600">{companyIdentifier}</span>
                    <span className="font-light text-gray-300">{exchangeName}</span>
                </div>
            )}
            {title && (
                <div className="leading-4 pl-5 pr-5 pt-3">
                    <span className="font-bold text-base">{title}</span>
                </div>
            )}
            {(sourceName || date) && (
                <div className="flex items-center pl-5 pr-5 pt-2 text-sm">
                    {sourceName && <span className="text-indigo-300">{sourceName}</span>}
                    {sourceName && date && <span className="pl-1 pr-1 text-gray-400">•</span>}
                    {date && <span className="text-gray-400">{date}</span>}
                </div>
            )}
            {body && <div className="leading-4 overflow-y-auto pb-3 pl-5 pr-5 pt-3">{body}</div>}
        </div>
    );
}

/** @notExported */
export interface ContentProps extends ContentSharedProps {}

/**
 * Renders Content
 */
export function Content(props: ContentProps): ReactElement {
    const {
        body,
        companyIdentifier,
        contentType,
        date,
        exchangeName,
        onBack,
        onChangeSearchTerm,
        searchTerm,
        sourceName,
        title,
    } = props;
    return (
        <ContentUI
            body={body}
            companyIdentifier={companyIdentifier}
            contentType={contentType}
            date={date}
            exchangeName={exchangeName}
            onBack={onBack}
            onChangeSearchTerm={onChangeSearchTerm}
            searchTerm={searchTerm}
            sourceName={sourceName}
            title={title}
        />
    );
}
