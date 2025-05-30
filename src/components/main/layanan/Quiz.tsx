import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { QuizItem } from "@/types";
import Heading from "./Heading";

type QuizProps = {
  quiz: QuizItem[];
};

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  return (
    quiz.length > 0 && (
      <div className="mt-5">
        <Heading text="Quiz" />
        <div className="mt-5 bg-white shadow-md rounded-md p-4">
          <p className="bg-primary/10 font-medium text-sm p-4 rounded-md">
            <strong>Legalitas.org</strong> telah membuat quiz agar kamu sudah
            memahami Perseroan Terbatas. Apabila ada pertanyaan lebih detail,
            bisa konsultasi langsung kepada konsultan kami.
          </p>
          <Separator className="my-2" />
          <h3 className="text-lg font-semibold">Quiz - PT</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
            {quiz.map((value) => (
              <div key={`${value.options}-${value.id}`} className="">
                <h3 className="text-sm lg:text-base font-semibold">
                  {value.id}. {value.question}
                </h3>
                <RadioGroup className="mt-3">
                  {value.options.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem value={item} id={item} />
                      <Label
                        htmlFor={item}
                        className="text-sm text-muted-foreground leading-[24px]"
                      >
                        {item}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </div>
          <Separator className="my-5" />
          <div className="">
            <p className="bg-primary/10 font-medium text-sm p-4 rounded-md">
              Skor quiz akan dikirim langsung melalui Whatsapp!
            </p>
            <div className="mt-3 flex flex-col gap-1">
              <Label htmlFor="name">Nama</Label>
              <Input id="name" placeholder="Nama" className="text-sm" />
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Email" className="text-sm" />
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <Label htmlFor="nomor-whatsapp">Nama</Label>
              <Input
                id="nomor-whatsapp"
                placeholder="Nomor Whatsapp"
                className="text-sm"
              />
            </div>
            <Button variant="default" className="mt-5 btn-gradient">
              Kirim Jawaban
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default Quiz;
