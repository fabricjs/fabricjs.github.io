import { Sandpack } from '@codesandbox/sandpack-react';

const SandpackCustom = ({ children, ...props }) => {
    return (
        <Sandpack
            template="vanilla"
            customSetup={{ 
                dependencies: { 
                  "fabric": "latest" 
                }
            }}
            {...props}>
            {children}
        </Sandpack>
    );
}

export default SandpackCustom