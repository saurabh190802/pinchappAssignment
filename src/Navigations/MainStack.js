import React from 'react';

import TabRoutes from './TabRoutes';

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name="Profile"
                component={TabRoutes}
            />
        
        </>
    )
}