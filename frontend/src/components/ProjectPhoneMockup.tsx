import { motion } from "framer-motion";

type ProjectLike = {
  title: string;
  description: string;
  tech: string[];
};

function FacePreview() {
  return (
    <>
      <div className="phone-appbar">
        <i />
        Face Logbook<b>•••</b>
      </div>
      <div className="face-scan">
        <span>RK</span>
        <i />
      </div>
      <small>Attendance today</small>
      <div className="mini-stat-row">
        <b>
          Present
          <br />
          <em>24</em>
        </b>
        <b>
          Checked out
          <br />
          <em>18</em>
        </b>
      </div>
      <div className="phone-list">
        <i />
        <span>
          Recent check-ins<small>Verified with ArcFace</small>
        </span>
      </div>
      <div className="phone-list">
        <i />
        <span>
          Admin overview<small>Live attendance log</small>
        </span>
      </div>
    </>
  );
}

function ClassroomPreview() {
  return (
    <>
      <div className="phone-appbar">
        <i />
        Virtual Class<b>•••</b>
      </div>
      <small>Live session · AI supported</small>
      <div className="video-grid">
        {["RK", "AM", "PS", "SK"].map((x) => (
          <span key={x}>{x}</span>
        ))}
      </div>
      <div className="lesson-card">
        <b>Today’s classroom</b>
        <small>Video, chat and assignments</small>
      </div>
      <div className="call-controls">
        <i />
        <i />
        <i />
      </div>
    </>
  );
}

function ChatPreview() {
  return (
    <>
      <div className="phone-appbar">
        <i />
        Messages<b>•••</b>
      </div>
      <div className="chat-person">
        <span>AR</span>
        <b>
          Project group<small>4 members · online</small>
        </b>
      </div>
      <div className="chat-thread">
        <p>Interface update is live.</p>
        <p>Great, I’ll review the responsive view.</p>
        <p>Media uploaded to Cloudinary ✓</p>
      </div>
      <div className="chat-input">
        Message...<i>↗</i>
      </div>
    </>
  );
}

function PropertyPreview() {
  return (
    <>
      <div className="phone-appbar">
        <i />
        Properties<b>•••</b>
      </div>
      <small>Portfolio overview</small>
      <div className="property-total">
        <span>Active listings</span>
        <strong>24</strong>
        <em>Real-time data</em>
      </div>
      <div className="bar-chart">
        {[42, 68, 54, 82, 62, 91].map((h, i) => (
          <i key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mini-stat-row">
        <b>
          Occupancy
          <br />
          <em>86%</em>
        </b>
        <b>
          Requests
          <br />
          <em>12</em>
        </b>
      </div>
    </>
  );
}

function StreamingPreview() {
  return (
    <>
      <div className="phone-appbar">
        <i />
        Stream<b>⌕</b>
      </div>
      <div className="stream-hero">
        <small>Now streaming</small>
        <strong>Adaptive stories</strong>
        <button>▶ Play</button>
      </div>
      <small>Continue watching</small>
      <div className="poster-row">
        <i />
        <i />
        <i />
      </div>
      <small>Recommended for you</small>
      <div className="poster-row small">
        <i />
        <i />
        <i />
        <i />
      </div>
    </>
  );
}

const previews = [FacePreview, ClassroomPreview, ChatPreview, PropertyPreview, StreamingPreview];

export function ProjectPhoneMockup({
  project,
  index,
  className = "",
  compact = false,
}: {
  project: ProjectLike;
  index: number;
  className?: string;
  compact?: boolean;
}) {
  const Preview = previews[index % previews.length];
  return (
    <motion.div
      className={`phone-mockup phone-theme-${index + 1} ${compact ? "phone-compact" : ""} ${className}`}
      initial={{ opacity: 0, y: index % 2 ? 90 : 130, rotate: index % 2 ? 3 : -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.9, delay: Math.min(index * 0.09, 0.3), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -12, rotate: index % 2 ? 1 : -1, transition: { duration: 0.25 } }}
      role="img"
      aria-label={`${project.title} interface preview`}
    >
      <div className="phone-frame">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <Preview />
        </div>
        <div className="phone-home" />
      </div>
    </motion.div>
  );
}
