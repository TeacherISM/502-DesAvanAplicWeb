import React from 'react';

export function withLogging<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function EnhancedComponent(props: P) {
    console.log(`Rendering ${WrappedComponent.name} with props:`, props);
    return <WrappedComponent {...props} />;
  };
}