import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MicIcon className="size-6" />
          <span className="sr-only">Experience Shree's LLM Innovations:</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            target=""
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
          {/* <Link
            target="_blank"
            href="https://summarize-ai.streamlit.app/"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Video Summary Transcriber
          </Link> */}
          {/* <Link
            target="_blank"
            href="https://summarize-ai.streamlit.app/"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Resume Tracker
          </Link> */}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Unlock the Power of Shree's AI-Integrated Services 🧠
                </h1>

                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  <br />
                  🔹 Experience seamless content digestion with my advanced LLM
                  Video Summary Transcriber, and revolutionize your career
                  management with our cutting-edge Resume Tracker.
                  <br />
                  <br />
                  🔹 Discover precision, innovation, and efficiency like never
                  before.
                </p>
                <div className="space-x-4 mt-4">
                  {/* <Link
                    target="_blank"
                    href="https://summarize-ai.streamlit.app/"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Try Video Summary Transcriber
                  </Link> */}
                  {/* <Link
                    target="_blank"
                    href="https://www.youtube.com/"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Try Resume Tracker
                  </Link> */}
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-m">
                  Featured LLM Services
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent>
                      <img
                        src="/video-transcriber.svg"
                        width={200}
                        height={200}
                        alt="Video Summary Transcriber"
                        className="rounded-lg object-cover w-full aspect-square"
                      />
                      <div className="flex-1 py-2">
                        <h3 className="font-semibold tracking-tight">
                          Video Summary Transcriber
                        </h3>
                        <small className="text-sm leading-none text-muted-foreground">
                          Accurate video summary transcription
                        </small>
                        <h4 className="font-semibold"></h4>
                        <Link
                          target="_blank"
                          href="https://summarize-ai.streamlit.app/"
                          className="font-semibold"
                          prefetch={false}
                        >
                          <Button className="mt-2">Try Now</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <img
                        src="/tracker.png"
                        width={200}
                        height={200}
                        alt="Resume Tracker"
                        className="rounded-lg object-cover w-full aspect-square"
                      />
                      <div className="flex-1 py-2">
                        <h3 className="font-semibold tracking-tight">
                          Resume Tracker
                        </h3>
                        <small className="text-sm leading-none text-muted-foreground">
                          Track job applications and resumes
                        </small>
                        <h4 className="font-semibold"></h4>
                        <Button className="mt-2">Try Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                  {/* <Card>
                    <CardContent>
                      <img
                        src="/placeholder.svg"
                        width={200}
                        height={200}
                        alt="Sentiment Analysis"
                        className="rounded-lg object-cover w-full aspect-square"
                      />
                      <div className="flex-1 py-2">
                        <h3 className="font-semibold tracking-tight">
                          Sentiment Analysis
                        </h3>
                        <small className="text-sm leading-none text-muted-foreground">
                          Analyze sentiment in text
                        </small>
                        <h4 className="font-semibold">$7.99/month</h4>
                        <Button className="mt-2">Try Now</Button>
                      </div>
                    </CardContent>
                  </Card> */}
                  {/* <Card>
                    <CardContent>
                      <img
                        src="/placeholder.svg"
                        width={200}
                        height={200}
                        alt="Language Translation"
                        className="rounded-lg object-cover w-full aspect-square"
                      />
                      <div className="flex-1 py-2">
                        <h3 className="font-semibold tracking-tight">
                          Language Translation
                        </h3>
                        <small className="text-sm leading-none text-muted-foreground">
                          Translate text between languages
                        </small>
                        <h4 className="font-semibold">$6.99/month</h4>
                        <Button className="mt-2">Try Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <img
                        src="/placeholder.svg"
                        width={200}
                        height={200}
                        alt="Entity Extraction"
                        className="rounded-lg object-cover w-full aspect-square"
                      />
                      <div className="flex-1 py-2">
                        <h3 className="font-semibold tracking-tight">
                          Entity Extraction
                        </h3>
                        <small className="text-sm leading-none text-muted-foreground">
                          Extract entities from text
                        </small>
                        <h4 className="font-semibold">$8.99/month</h4>
                        <Button className="mt-2">Try Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <img
                        src="/placeholder.svg"
                        width={200}
                        height={200}
                        alt="Text Summarization"
                        className="rounded-lg object-cover w-full aspect-square"
                      />
                      <div className="flex-1 py-2">
                        <h3 className="font-semibold tracking-tight">
                          Text Summarization
                        </h3>
                        <small className="text-sm leading-none text-muted-foreground">
                          Summarize long text into key points
                        </small>
                        <h4 className="font-semibold">$7.99/month</h4>
                        <Button className="mt-2">Try Now</Button>
                      </div>
                    </CardContent>
                  </Card> */}
                </div>
              </div>
            </div>
            <img
              src="/llm.jpg"
              width={1270}
              height={900}
              alt="LLM Hero"
              className=" rounded-4xl mx-auto aspect-[2/1] overflow-hidden  object-cover"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-2xl">
                  Shree's Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Empowering Users with the Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Shree's LLM Services, our mission is to provide
                  high-quality, durable LLM models that power our video summary
                  transcription and resume tracking solutions. We believe in
                  empowering users with tools that simplify their daily tasks
                  and help them achieve their goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card>
                <CardContent>
                  <CaptionsIcon className="size-8" />
                  <h3 className="text-lg font-bold">
                    Accurate Video Summary Transcription
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our LLM-powered video summary transcription service delivers
                    highly accurate results, saving you time and effort.
                  </p>
                  <Link
                    target="_blank"
                    href="https://youtu.be/2Rcr-GtwKjk?si=XnYpUd6mSNhjx3V4"
                    className="font-semibold"
                    prefetch={false}
                  >
                    <Button className="mt-2">Watch Demo on YouTube</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <MonitorCheckIcon className="size-8" />
                  <h3 className="text-lg font-bold">
                    Intelligent Resume Tracking Application
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our LLM-powered video summary transcription service delivers
                    highly accurate results, saving you time and effort.
                  </p>
                  <Button className="mt-2">Watch Demo on YouTube</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Discover Shree's Advanced LLM Solutions
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Offering cutting-edge language model services to streamline your
                tasks. From accurate video transcriptions to efficient document
                summarizations, our services are designed to save you time and
                enhance productivity.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link
                target="_blank"
                href="https://shree-folio.vercel.app/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Visit My PortFolio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CaptionsIcon(props) {
  return (
    <svg
      {...props}
      xmlns=""
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
      <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
    </svg>
  );
}

function EraserIcon(props) {
  return (
    <svg
      {...props}
      xmlns=""
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
      <path d="M22 21H7" />
      <path d="m5 11 9 9" />
    </svg>
  );
}

function LanguagesIcon(props) {
  return (
    <svg
      {...props}
      xmlns=""
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </svg>
  );
}

function MicIcon(props) {
  return (
    <svg
      {...props}
      xmlns=""
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></svg>
  );
}

function MonitorCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns=""
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 10 2 2 4-4" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </svg>
  );
}

function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns=""
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function TextSearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns=""
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 6H3" />
      <path d="M10 12H3" />
      <path d="M10 18H3" />
      <circle cx="17" cy="15" r="3" />
      <path d="m21 19-1.9-1.9" />
    </svg>
  );
}

function UserPlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns=""
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns=""
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
