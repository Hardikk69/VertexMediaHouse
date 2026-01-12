import { ScrollStackItem } from "./ScrollItem";
import ScrollStack from "./ScrollItem";
export default function ScrollStakeSection() {
    return (
        <section className="scroll-stack-section" >
            <div className="container scroll-stack-layout">

                {/* LEFT — Why Us */}
                <div className="why-us-column">
                    <span className="why-us-label">Our Work</span>
                    <h2>Why Us?</h2>

                    <div className="why-us-boxes">
                        <div className="why-us-box active">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                            quaerat, fuga quod repudiandae vero voluptatibus explicabo dolor
                            fugiat natus soluta quia quos dolorem enim? Ipsa molestias ab
                            recusandae optio saepe?
                        </div>
                        <div className="why-us-box">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                            deserunt possimus laudantium maxime dolorum soluta consequuntur
                            veniam fugit impedit officia dolores exercitationem consequatur
                            similique et, facere eveniet aspernatur esse magni!
                        </div>
                        <div className="why-us-box active">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                            quaerat, fuga quod repudiandae vero voluptatibus explicabo dolor
                            fugiat natus soluta quia quos dolorem enim? Ipsa molestias ab
                            recusandae optio saepe?
                        </div>
                        <div className="why-us-box">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                            deserunt possimus laudantium maxime dolorum soluta consequuntur
                            veniam fugit impedit officia dolores exercitationem consequatur
                            similique et, facere eveniet aspernatur esse magni!
                        </div>
                    </div>
                </div>

                {/* RIGHT — Your existing ScrollStack (UNCHANGED) */}
                <div className="scroll-stack-wrapper">
                    <ScrollStack
                        useWindowScroll={true}
                        itemDistance={10}
                        itemStackDistance={20}
                        baseScale={0.9}
                        stackPosition="30%">

                        <ScrollStackItem itemClassName="bg-[#d8f66f] text-black">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Discovery Phase</h2>
                                <p>We deeply analyze your brand and goals to create a strategic roadmap for success.</p>
                            </div>
                        </ScrollStackItem>

                        <ScrollStackItem itemClassName="bg-[#8d96fd]">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Design Strategy</h2>
                                <p>Creating visual identities that resonate with your target audience.</p>
                            </div>
                        </ScrollStackItem>

                        <ScrollStackItem itemClassName="bg-[#ff7d84]">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Development & Launch</h2>
                                <p>Building high-performance assets and launching them with precision.</p>
                            </div>
                        </ScrollStackItem>

                        <ScrollStackItem itemClassName="bg-[#ffe176]">
                            <div>
                                <h2 className="text-3xl font-bold mb-4">Discovery Phase</h2>
                                <p>We deeply analyze your brand and goals to create a strategic roadmap for success.</p>
                            </div>
                        </ScrollStackItem>
                    </ScrollStack>
                </div>
            </div>
        </section >)
}