import ParallaxText from "./parallax";

const Heading = () => {
    return (
        <section className="w-[100%] sm:w-[95%] ">
            <ParallaxText baseVelocity={-1} optionalClassName="heading-3 uppercase text-gray-1">healthy shouldn&apos;t be boring.</ParallaxText>
            <ParallaxText baseVelocity={-3} optionalClassName="text-[1.5rem] sm:text-[2rem] text-primary-2">track your workouts, see your friends&apos; progress, make exercising more fun,</ParallaxText>
       </section>
    )
};

export default Heading;
