import React from 'react';
import { screen } from '@testing-library/react';
import { EventConnectionStatus } from '@aiera/client-sdk/types/generated';
import { renderWithClient } from 'testUtils';
import { EmptyMessage, Event } from '.';

const event = {
    id: '1',
    eventDate: '2021-08-25T18:00:00+00:00',
    title: 'Event Title',
    eventType: 'earnings',
    hasConnectionDetails: true,
    connectionStatus: EventConnectionStatus.Connected,
    isLive: true,
    publishedTranscriptExpected: true,
    hasTranscript: true,
    hasPublishedTranscript: true,
    audioRecordingOffsetMs: 0,
    primaryCompany: {
        instruments: [
            {
                isPrimary: true,
                quotes: [
                    {
                        isPrimary: true,
                        localTicker: 'TICK',
                        exchange: {
                            country: { countryCode: 'US' },
                            shortName: 'EXCH',
                        },
                    },
                ],
            },
        ],
    },
};

describe('EmptyMessage', () => {
    test('renders', () => {
        renderWithClient(<EmptyMessage event={event as Event} />);
        screen.getByText('Event Title');
    });

    test('EventStatus Connection Not Expected', () => {
        const testEvent = {
            ...event,
            connectionStatus: EventConnectionStatus.ConnectionNotExpected,
        };
        renderWithClient(<EmptyMessage event={testEvent as Event} />);
        screen.getByText('no connection details');
    });

    test('EventStatus Connection Expected', () => {
        const testEvent = {
            ...event,
            connectionStatus: EventConnectionStatus.ConnectionExpected,
        };
        renderWithClient(<EmptyMessage event={testEvent as Event} />);
        screen.getByText('connection expected');
    });

    test('EventStatus Waiting to Connect', () => {
        const testEvent = {
            ...event,
            connectionStatus: EventConnectionStatus.WaitingToConnect,
        };
        renderWithClient(<EmptyMessage event={testEvent as Event} />);
        screen.getByText('waiting for connection');
    });

    test('EventStatus Connected', () => {
        const testEvent = {
            ...event,
            connectionStatus: EventConnectionStatus.Connected,
        };
        renderWithClient(<EmptyMessage event={testEvent as Event} />);
        screen.getByText('connected');
    });

    test('EventStatus Missed', () => {
        const testEvent = {
            ...event,
            connectionStatus: EventConnectionStatus.Missed,
        };
        renderWithClient(<EmptyMessage event={testEvent as Event} />);
        screen.getByText('missed');
    });

    test('EventStatus Transcribing', () => {
        const testEvent = {
            ...event,
            connectionStatus: EventConnectionStatus.Transcribing,
        };
        renderWithClient(<EmptyMessage event={testEvent as Event} />);
        screen.getByText('This message should not appear');
    });

    test('EventStatus Transcribed', () => {
        const testEvent = {
            ...event,
            connectionStatus: EventConnectionStatus.Transcribed,
        };
        renderWithClient(<EmptyMessage event={testEvent as Event} />);
        screen.getByText('This message should not appear');
    });
});
