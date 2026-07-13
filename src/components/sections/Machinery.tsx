import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { machineGroups } from '../../data/machinery';

export function Machinery() {
  return (
    <section
      id="technika"
      aria-labelledby="technika-title"
      className="scroll-mt-24 bg-industrial py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="technika-title"
          eyebrow="Vybavení"
          title="Strojní a technické vybavení"
          description="Disponujeme vlastním strojním parkem – od otočných rypadel a traktorbagrů až po hutnicí a vrtací techniku."
          light
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {machineGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.id} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <span className="grid h-11 w-11 place-items-center rounded-md bg-olive-600 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold text-white">{group.title}</h3>
                  </div>
                  <ul className="mt-4 flex flex-col gap-3">
                    {group.machines.map((m) => (
                      <li key={m.name} className="flex items-baseline gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-olive-400" aria-hidden="true" />
                        <span>
                          <span className="font-medium text-sand-50">{m.name}</span>
                          {m.note && (
                            <span className="text-sm text-sand-200/70"> — {m.note}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
