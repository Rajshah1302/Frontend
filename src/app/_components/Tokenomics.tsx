'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Crowdsale investors', value: 80, color: '#0081FF' },
  { name: 'Foundation', value: 20, color: '#FFA600' },
]

export default function Tokenomics() {
  return (
    <div className="rounded-lg p-6 bg-white my-5 shadow-md max-w-6xl mx-5 sm:mx-0 sm:ml-10">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Tokenomics</h2>
        
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Initial Distribution</h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-3">
                {data.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-muted-foreground">
                      {item.name}: {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel
            consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend
            lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam
            fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum
            eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet
            odio nisi eu ac risus.
          </p>
        </div>
      </div>
    </div>
  )
}

