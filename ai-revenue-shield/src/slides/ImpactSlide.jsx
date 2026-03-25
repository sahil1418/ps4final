import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { TrendingUp, Clock, UserCheck, FileCheck, DollarSign, Cpu, Shield, Heart, User, Star, MessageSquare } from 'lucide-react'
import TypewriterText from '../components/TypewriterText.jsx'

const kpis = [
  { prefix:'+', value:28, suffix:'%', label:'Retention Uplift', sub:'from uplift targeting', icon:<TrendingUp size={22} strokeWidth={1.5}/>, color:'#34d399' },
  { prefix:'', value:90, suffix:'%', label:'Agent Time Saved', sub:'via Gen-AI + SHAP', icon:<Clock size={22} strokeWidth={1.5}/>, color:'#22d3ee' },
  { prefix:'<', value:60, suffix:'s', label:'Event Response', sub:'via Kafka triggers', icon:<UserCheck size={22} strokeWidth={1.5}/>, color:'#818cf8' },
  { prefix:'', value:100, suffix:'%', label:'Audit Trail', sub:'every decision logged', icon:<FileCheck size={22} strokeWidth={1.5}/>, color:'#fbbf24' },
]

const impacts = [
  { title:'Economic', desc:'Every 1% retention improvement saves crores annually in AUM', icon:<DollarSign size={15} strokeWidth={1.5}/>, color:'#34d399' },
  { title:'Operational', desc:'Agent prep drops from 10 min to 3 seconds', icon:<Cpu size={15} strokeWidth={1.5}/>, color:'#22d3ee' },
  { title:'Regulatory', desc:'Full DPDP compliance with complete audit trails', icon:<Shield size={15} strokeWidth={1.5}/>, color:'#818cf8' },
  { title:'Social', desc:'Proactive support during financial stress moments', icon:<Heart size={15} strokeWidth={1.5}/>, color:'#fb7185' },
]

export default function ImpactSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-8 py-4">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.5}} className="text-center mb-4">
        <span className="badge-emerald px-4 py-1.5 rounded-full text-xs font-mono tracking-wider">IMPACT & BENEFITS</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-3">
          <span className="gradient-text">Measurable</span> <span className="text-white">Outcomes</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-6xl mb-4">
        {kpis.map((kpi,i) => (
          <motion.div key={kpi.label} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}
            transition={{delay:0.2+i*0.1,duration:0.4}}
            className="glass p-4 text-center relative overflow-hidden">
            <div style={{color:kpi.color}} className="mx-auto mb-2">{kpi.icon}</div>
            <div className="text-4xl md:text-5xl font-black mb-1" style={{color:kpi.color}}>
              {kpi.prefix}<CountUp end={kpi.value} duration={2} delay={0.5+i*0.15}/>{kpi.suffix}
            </div>
            <p className="text-sm font-bold text-white">{kpi.label}</p>
            <p className="text-xs mt-0.5" style={{color:'#94a3b8'}}>{kpi.sub}</p>
            <div className="absolute inset-x-0 top-0 h-px" style={{background:`linear-gradient(90deg,transparent,${kpi.color}50,transparent)`}}/>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 w-full max-w-6xl">
        <div className="md:col-span-4 grid grid-cols-2 gap-2">
          {impacts.map((imp,i) => (
            <motion.div key={imp.title} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}
              transition={{delay:0.6+i*0.1,duration:0.3}}
              className="glass-light p-3.5">
              <div className="flex items-center gap-2 mb-2">
                <span style={{color:imp.color}}>{imp.icon}</span>
                <span className="text-sm font-semibold text-white">{imp.title}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{color:'#cbd5e1'}}>{imp.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="md:col-span-8">
          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:0.75,duration:0.5}}>
            <div className="mac-window">
              <div className="mac-dots">
                <div className="mac-dot" style={{background:'#ff5f57'}}/>
                <div className="mac-dot" style={{background:'#febc2e'}}/>
                <div className="mac-dot" style={{background:'#28c840'}}/>
                <span className="ml-3 text-xs font-mono" style={{color:'#64748b'}}>Agent Command Center — Today's Priority Customers</span>
              </div>
              <div className="p-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{background:'rgba(99,102,241,0.14)'}}>
                    <User size={20} style={{color:'#818cf8'}} strokeWidth={1.5}/>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-white">Ananya Sharma</span>
                      <span className="badge-amber px-2 py-0.5 rounded text-xs font-mono">HNI</span>
                      <span className="badge-emerald px-2 py-0.5 rounded text-xs font-mono">Persuadable</span>
                    </div>
                    <div className="flex gap-4 mt-1 text-xs font-mono" style={{color:'#94a3b8'}}>
                      <span>CLV: <span style={{color:'#34d399'}}>₹14.5L</span></span>
                      <span>Stage: <span style={{color:'#818cf8'}}>Mature</span></span>
                      <span>Uplift: <span style={{color:'#22d3ee'}}>+24%</span></span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-3xl font-black" style={{color:'#fb7185'}}>82%</div>
                    <span className="text-xs font-mono" style={{color:'#94a3b8'}}>Churn Risk</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg" style={{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)'}}>
                    <span className="text-xs font-mono uppercase" style={{color:'#94a3b8'}}>Why she might leave (SHAP)</span>
                    <div className="mt-2 space-y-1.5">
                      {['Salary missed 2 consecutive months','Login frequency down 70%','Open complaint ticket #4892'].map((r,i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{background:'#fb7185'}}/>
                          <span className="text-sm" style={{color:'#cbd5e1'}}>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg" style={{background:'rgba(255,255,255,0.025)',border:'1px solid rgba(255,255,255,0.06)'}}>
                    <span className="text-xs font-mono uppercase" style={{color:'#94a3b8'}}>AI Recommended Action</span>
                    <p className="text-sm text-white font-semibold mt-2">Assign RM + Waive annual fee</p>
                    <p className="text-xs mt-1.5" style={{color:'#94a3b8'}}>
                      <Star size={9} className="inline mr-1" style={{color:'#fbbf24'}} strokeWidth={2}/>
                      68% success rate for similar HNI profiles
                    </p>
                    <div className="flex gap-2 mt-2.5">
                      <button className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1"
                        style={{background:'rgba(16,185,129,0.14)',color:'#34d399',border:'1px solid rgba(16,185,129,0.28)'}}>
                        <MessageSquare size={10} strokeWidth={2}/>Generate Message
                      </button>
                      <button className="px-3 py-1.5 rounded-lg text-xs font-mono"
                        style={{background:'rgba(255,255,255,0.04)',color:'#94a3b8',border:'1px solid rgba(255,255,255,0.08)'}}>
                        Override
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}
        className="mt-3 glass-light px-6 py-2.5 font-mono text-sm text-center">
        <span style={{color:'#94a3b8'}}>Decision gate: </span>
        <span style={{color:'#22d3ee'}}>net_roi</span>
        <span style={{color:'#64748b'}}> = (</span>
        <span style={{color:'#a78bfa'}}>uplift</span>
        <span style={{color:'#64748b'}}> × </span>
        <span style={{color:'#34d399'}}>CLV</span>
        <span style={{color:'#64748b'}}>) − </span>
        <span style={{color:'#fb7185'}}>cost</span>
        <span style={{color:'#64748b'}}>  |  authorize if </span>
        <span style={{color:'#22d3ee'}}>net_roi {'>'} 0</span>
        <span style={{color:'#64748b'}}> AND segment == </span>
        <span style={{color:'#34d399'}}>Persuadable</span>
      </motion.div>
    </div>
  )
}
