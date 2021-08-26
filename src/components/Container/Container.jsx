import { Containers } from "./Container.styles";

export default function Container ({ children }) {
    return (
        <Containers>
            {children}
      </Containers>
    )
};

// import { Containers, Title } from "./Container.styles";

// export default function Container ({ children, title }) {
//     return (
//        <Containers>
//     <Title>{title}</Title>
//     {children}
//   </Containers>
//     )
// };
