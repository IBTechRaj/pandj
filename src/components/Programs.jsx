import React from "react";
import programs from "../pics/programs.png"

function Programs() {
    return (
        <div className="about">
            <div className="container">

                <div className="row align-items-center my-5 py-2">
                    <img style={{ width: "100%", height: 300 }} src={programs} alt="img missing" />
                </div>

                <div className="row justify-content-center">
                    <h1 style={{ fontSize: 48, fontWeight: 600, color: '#0C71C5' }}>Programs</h1>

                </div>

                <div className="row align-items-center my-5" style={{ fontSize: 24, fontWeight: 400 }}>
                    <p>
                        At PJFC, we are committed to having meaningful programs and ministries to help people grow in their faith, connect with others,
                        and serve their community. We do regular programs catering to different age groups, interests, and needs. Here are some of our
                        ongoing programs:
                    </p>
                    <p style={{
                        fontSize: 24, fontWeight: 700, color: '#0C71C5'
                    }}> Worship Services </p><p>Our weekly worship services are the heartbeat of our church. We gather together to worship God,
                        study His Word, and experience His presence. We believe that our services are uplifting and filled relevant teachings.</p><p style={{
                            fontSize: 24, fontWeight: 700, color: '#0C71C5'
                        }}>
                        Bible Study
                    </p>
                    <p>
                        We believe that studying God's Word is essential for spiritual growth, and our Bible study programs are designed to provide
                        opportunities for individuals and groups to dive deeper into the Scriptures. Our Bible study programs are focused on helping
                        people understand the truth of God's Word, apply it to their lives, and grow in their relationship with Him. We do topical
                        and book studies to explore the richness and relevance of the Scriptures.   </p>
                    <p style={{
                        fontSize: 24, fontWeight: 700, color: '#0C71C5'
                    }}>
                        Prayer Ministry
                    </p><p>
                        We believe in the power of prayer, and our prayer ministry is dedicated to interceding for the needs of our church, community,
                        and beyond. We have monthly church prayer and regular prayer gatherings that allow people to come together and seek God's presence
                        and intervention in their lives.    </p>
                    <p style={{
                        fontSize: 24, fontWeight: 700, color: '#0C71C5'
                    }}>
                        Cottage Meetings
                    </p><p>
                        At PJFC, we value community and believe in the importance of building meaningful relationships with one another. Our cottage meetings are small,
                        intimate gatherings held in the homes of church members, where we come together to connect, share, and grow in our faith</p>

                    <p style={{
                        fontSize: 24, fontWeight: 700, color: '#0C71C5'
                    }}>
                        Children's Ministry
                    </p><p>
                        We believe in investing in the next generation. Our children's ministry is designed to provide a safe and nurturing environment where
                        children can learn about God's love and grow in their faith. We offer age-appropriate classes, engaging lessons, and fun activities
                        that help children develop a strong foundation in their relationship with God.      </p>


                    <p style={{
                        fontSize: 24, fontWeight: 700, color: '#0C71C5'
                    }}>
                        Special Events
                    </p>
                    <p>
                        We host special events as and when needed, such as seasonal celebrations, holiday gatherings, and family conferences that are
                        designed to inspire, equip, and encourage our church community. These events provide additional opportunities
                        for people to connect, grow, and be refreshed in their faith.       </p>

                    <p> For more information about our programs, please  <a href="/pandj#/contact">contact us.</a> </p>
                </div>
            </div>
        </div>
    );
}

export default Programs;