import { motion } from 'framer-motion'
import { Target, BarChart3, Zap, Shield, Brain, GitBranch, ArrowRight } from 'lucide-react'
import TypewriterText from '../components/TypewriterText.jsx'

const features = [
  { icon:<Target size={22} strokeWidth={1.5}/>, title:'Causal Targeting', desc:'Only contacts customers where reaching out actually changes their decision', color:'#818cf8', bg:'rgba(99,102,241,0.09)' },
  { icon:<BarChart3 size={22} strokeWidth={1.5}/>, title:'Smart Budgeting', desc:'Allocates daily budget like a smart investor — highest return first', color:'#22d3ee', bg:'rgba(6,182,212,0.09)' },
  { icon:<Zap size={22} strokeWidth={1.5}/>, title:'Real-time Response', desc:'Triggers an offer within 60 seconds of a customer missing salary credit', color:'#fbbf24', bg:'rgba(245,158,11,0.09)' },
  { icon:<Shield size={22} strokeWidth={1.5}/>, title:'Full Transparency', desc:'Every decision explained: "We called because salary was missed 2 months"', color:'#34d399', bg:'rgba(16,185,129,0.09)' },
]

const segments = [
  { label:'Sure Things', action:'Skip', desc:'Will stay regardless — save the budget', color:'#64748b' },
  { label:'Persuadables ✓', action:'INVEST', desc:'Only these get budget — intervention works', color:'#34d399', highlight:true },
  { label:'Lost Causes', action:'Skip', desc:'Will leave no matter what — accept it', color:'#64748b' },
  { label:'Sleeping Dogs', action:'AVOID', desc:'Calling them would trigger churn — stay silent', color:'#fb7185' },
]

export default function SolutionSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-8 py-4">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.5}} className="text-center mb-5">
        <span className="badge-indigo px-4 py-1.5 rounded-full text-xs font-mono tracking-wider">THE SOLUTION</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-3">
          <span className="gradient-text">AI Revenue Protection</span> <span className="text-white">Platform</span>
        </h2>
        <p className="mt-2 text-base md:text-lg max-w-3xl mx-auto" style={{color:'#cbd5e1'}}>
          <TypewriterText text="Not just predict churn — predict, explain, calculate ROI, and act with a personalised message. All in under 60 seconds." delay={0.3} speed={0.02} />
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full max-w-6xl">
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((f,i) => (
            <motion.div key={f.title} initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}
              transition={{delay:0.25+i*0.1,duration:0.4}}
              className="glass-light p-4 flex items-start gap-3">
              <div className="p-2.5 rounded-xl shrink-0" style={{background:f.bg,color:f.color}}>{f.icon}</div>
              <div>
                <h3 className="text-base font-bold text-white">{f.title}</h3>
                <p className="text-sm mt-1 leading-relaxed" style={{color:'#cbd5e1'}}>{f.desc}</p>
              </div>
            </motion.div>
          ))}

          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.75,duration:0.4}}
            className="md:col-span-2 glass-light px-4 py-3 flex items-center gap-3 flex-wrap">
            <Brain size={16} style={{color:'#a855f7'}} strokeWidth={1.5}/>
            <span className="text-sm font-semibold" style={{color:'#94a3b8'}}>Powered by</span>
            {[['Causal ML','#22d3ee'],['Knapsack OR','#818cf8'],['Kafka Streaming','#fbbf24'],['GPT-4o Gen-AI','#34d399']].map(([label,color]) => (
              <span key={label} className="text-xs font-mono px-3 py-1 rounded-lg"
                style={{background:`${color}10`,color,border:`1px solid ${color}22`}}>{label}</span>
            ))}
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:0.45,duration:0.5}}
            className="glass p-5 h-full">
            <div className="flex items-center gap-2 mb-2">
              <GitBranch size={15} style={{color:'#22d3ee'}} strokeWidth={1.5}/>
              <h3 className="text-sm font-mono tracking-widest uppercase" style={{color:'#94a3b8'}}>The Secret Weapon: Uplift Segmentation</h3>
            </div>
            <p className="text-sm mb-4" style={{color:'#94a3b8'}}>
              Traditional models predict churn. Ours predicts <span className="text-white font-semibold">change in churn</span> from intervention.
            </p>

            <div className="space-y-2.5">
              {segments.map((seg,i) => (
                <motion.div key={seg.label} initial={{opacity:0,x:14}} animate={{opacity:1,x:0}}
                  transition={{delay:0.6+i*0.1,duration:0.3}}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{background:seg.highlight?`${seg.color}10`:'rgba(255,255,255,0.025)',border:seg.highlight?`1px solid ${seg.color}28`:'1px solid rgba(255,255,255,0.06)'}}>
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{background:seg.color}}/>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-white">{seg.label}</span>
                    <span className="text-xs ml-2" style={{color:'#94a3b8'}}>{seg.desc}</span>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg" style={{color:seg.color,background:`${seg.color}18`}}>
                    {seg.action}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.1}}
              className="mt-4 flex items-center gap-2 text-sm font-mono" style={{color:'#94a3b8'}}>
              <ArrowRight size={12} style={{color:'#34d399'}} strokeWidth={2}/>
              <span>Budget goes <span style={{color:'#34d399'}} className="font-bold">only</span> to Persuadables = maximum ROI</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
