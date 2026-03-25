import { motion } from 'framer-motion'
import { Gem, BarChart3, Building2, Plug, Rocket, Globe, Users, ArrowRight } from 'lucide-react'
import TypewriterText from '../components/TypewriterText.jsx'

const canvas = [
  { abbr:'VP', title:'Value Proposition', desc:'Causal retention + smart budgeting + full compliance — not just prediction', icon:<Gem size={16} strokeWidth={1.5}/>, color:'#818cf8' },
  { abbr:'REV', title:'Revenue Streams', desc:'SaaS license + outcome-based pricing tied to AUM retained', icon:<BarChart3 size={16} strokeWidth={1.5}/>, color:'#34d399' },
  { abbr:'MKT', title:'Target Market', desc:'PSBs (primary), Private Banks, NBFCs, Insurance companies', icon:<Building2 size={16} strokeWidth={1.5}/>, color:'#22d3ee' },
  { abbr:'INT', title:'Integration', desc:'API-based plug-in: works with Finacle, Mambu, Salesforce', icon:<Plug size={16} strokeWidth={1.5}/>, color:'#fbbf24' },
]

const phases = [
  { num:1, title:'Pilot', timeline:'Month 1–3', desc:'Single branch, proof-of-concept with real customers', color:'#818cf8' },
  { num:2, title:'Validate', timeline:'Month 4–6', desc:'A/B test results, measure actual retention lift', color:'#22d3ee' },
  { num:3, title:'Scale', timeline:'Month 7–12', desc:'Bank-wide rollout across all branches', color:'#34d399' },
  { num:4, title:'Expand', timeline:'Year 2+', desc:'License platform to other PSBs and NBFCs', color:'#fbbf24' },
]

const scale = [
  { label:'Microservices', desc:'Each module deploys independently', icon:<Globe size={14} strokeWidth={1.5}/>, color:'#22d3ee' },
  { label:'Kafka Partitions', desc:'Horizontal scale for high event volume', icon:<BarChart3 size={14} strokeWidth={1.5}/>, color:'#818cf8' },
  { label:'Multi-Tenant', desc:'Separate DB replicas per institution', icon:<Users size={14} strokeWidth={1.5}/>, color:'#34d399' },
]

export default function BusinessSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-8 py-4">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.5}} className="text-center mb-4">
        <span className="badge-amber px-4 py-1.5 rounded-full text-xs font-mono tracking-wider">BUSINESS MODEL</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-3">
          <span className="gradient-text">Commercialisation</span> <span className="text-white">& Scaling</span>
        </h2>
        <p className="mt-2 text-base md:text-lg max-w-xl mx-auto" style={{color:'#cbd5e1'}}>
          <TypewriterText text="Designed to start small, prove value, then expand across India's entire banking ecosystem." delay={0.3} speed={0.022} />
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full max-w-6xl">
        <div className="md:col-span-5">
          <motion.div initial={{opacity:0,x:-14}} animate={{opacity:1,x:0}} transition={{delay:0.2,duration:0.4}} className="glass p-4 h-full">
            <h3 className="text-sm font-mono tracking-widest uppercase mb-4" style={{color:'#94a3b8'}}>Business Model Canvas</h3>
            <div className="grid grid-cols-2 gap-3">
              {canvas.map((item,i) => (
                <motion.div key={item.abbr} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
                  transition={{delay:0.3+i*0.08,duration:0.3}}
                  className="p-3.5 rounded-xl" style={{background:`${item.color}09`,border:`1px solid ${item.color}20`}}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold" style={{color:item.color}}>{item.abbr}</span>
                    <span style={{color:item.color}}>{item.icon}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm" style={{color:'#cbd5e1'}}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-4">
          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:0.35,duration:0.4}} className="glass p-4 h-full">
            <h3 className="text-sm font-mono tracking-widest uppercase mb-4" style={{color:'#94a3b8'}}>Deployment Roadmap</h3>
            <div className="space-y-3 relative">
              <motion.div initial={{scaleY:0}} animate={{scaleY:1}} transition={{delay:0.5,duration:1.1,ease:[0.16,1,0.3,1]}}
                className="absolute left-[14px] top-2 bottom-2 w-[2px] origin-top"
                style={{background:'linear-gradient(180deg,#6366f1,#06b6d4,#10b981,#f59e0b)',opacity:0.25}}/>

              {phases.map((p,i) => (
                <motion.div key={p.num} initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}}
                  transition={{delay:0.55+i*0.12,duration:0.3}} className="flex items-start gap-3 relative z-10">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{background:`${p.color}14`,border:`1px solid ${p.color}28`}}>
                    <span className="text-xs font-mono font-bold" style={{color:p.color}}>{p.num}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">{p.title}</h4>
                      <span className="text-xs font-mono" style={{color:p.color}}>{p.timeline}</span>
                    </div>
                    <p className="text-sm" style={{color:'#cbd5e1'}}>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1}}
              className="mt-4 flex items-center gap-2 p-3 rounded-lg glass-light">
              <Rocket size={13} style={{color:'#fbbf24'}} strokeWidth={1.5}/>
              <span className="text-sm" style={{color:'#cbd5e1'}}>
                Risk-free to start: <span style={{color:'#fbbf24'}} className="font-semibold">pay per outcome</span>, not upfront
              </span>
            </motion.div>
          </motion.div>
        </div>

        <div className="md:col-span-3">
          <motion.div initial={{opacity:0,x:14}} animate={{opacity:1,x:0}} transition={{delay:0.5,duration:0.4}} className="glass p-4 h-full">
            <h3 className="text-sm font-mono tracking-widest uppercase mb-4" style={{color:'#94a3b8'}}>Built to Scale</h3>
            <div className="space-y-3">
              {scale.map((s,i) => (
                <motion.div key={s.label} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}
                  transition={{delay:0.6+i*0.1,duration:0.3}}
                  className="p-3.5 rounded-xl" style={{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)'}}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span style={{color:s.color}}>{s.icon}</span>
                    <span className="text-sm font-semibold text-white">{s.label}</span>
                  </div>
                  <p className="text-sm" style={{color:'#cbd5e1'}}>{s.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.0}}
              className="mt-3 p-3 rounded-xl" style={{background:'rgba(99,102,241,0.07)',border:'1px solid rgba(99,102,241,0.18)'}}>
              <span className="text-xs font-mono uppercase" style={{color:'#94a3b8'}}>Go-to-Market</span>
              <p className="text-sm mt-1.5" style={{color:'#cbd5e1'}}>
                1 branch pilot <ArrowRight size={10} className="inline mx-1" style={{color:'#818cf8'}} strokeWidth={2}/>
                measure lift <ArrowRight size={10} className="inline mx-1" style={{color:'#818cf8'}} strokeWidth={2}/>
                expand bank-wide
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
