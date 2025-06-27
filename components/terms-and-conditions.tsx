import { ScrollArea } from "@radix-ui/react-scroll-area";

 export default function  TermsAndConditions()
 {
    return (
        <ScrollArea className="h-72 w-full rounded-md border">
                    <div className="p-4 text-sm">
                        <h4 className="mb-4 text-lg font-medium leading-none">Welcome to Our Service</h4>
                        <p className="mt-4 leading-7">
                            These Terms and Conditions ("Agreement") govern the provision of services by CodeBurst Pty Ltd ("CodeBurst", "we", "us", or "our"), a private company registered in Maseru East, Lesotho (Business ID: 200105876-3 | Registration No.: 74411), to the client ("Client", "you", or "your"). By engaging CodeBurst for services, the Client agrees to these Terms and Conditions effective as of the date of acceptance.
                        </p>
                        <p className="mt-4 leading-7">
                        </p>
                        <p className="mt-4 leading-7">
                            <ol className="list-decimal pl-4 space-y-2">
                                <li>
                                    <strong>Definitions</strong>
                                    <ul className="list-disc pl-4">
                                        <li>
                                            <strong>“Services”</strong> means the software development, consulting, maintenance, or other services provided by CodeBurst as described in a Statement of Work (SOW) or proposal.
                                        </li>
                                        <li>
                                            <strong>“Deliverables”</strong> means the tangible or intangible work products to be delivered by CodeBurst under the Agreement.
                                        </li>
                                        <li>
                                            <strong>“Statement of Work (SOW)”</strong> means a document specifying the Services, Deliverables, timeline, fees, and other relevant details agreed between CodeBurst and the Client.
                                        </li>
                                        <li>
                                            <strong>“Client Materials”</strong> means any data, documents, designs, or resources provided by the Client necessary for the performance of the Services.
                                        </li>
                                        <li>
                                            <strong>“Confidential Information”</strong> has the meaning set in the NDA signed between the parties.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Engagement and Scope</strong>
                                    <ul className="list-disc pl-4">
                                        <li>
                                            <strong>Proposal and SOW:</strong> Services commence upon mutual agreement on a Proposal or SOW referencing these Terms and Conditions.
                                        </li>
                                        <li>
                                            <strong>Changes:</strong> Any modifications to scope, timeline, or fees must be documented in a Change Order signed by both parties.
                                        </li>
                                        <li>
                                            <strong>Client Responsibilities:</strong> Client shall provide necessary access, materials, decisions, and timely feedback to enable CodeBurst to perform the Services.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Fees and Payment</strong>
                                    <ul className="list-disc pl-4">
                                        <li>
                                            <strong>Fees:</strong> Fees for Services are as specified in the SOW or proposal.
                                        </li>
                                        <li>
                                            <strong>Payment Terms:</strong> A non-refundable deposit (e.g., 40%) is due upon signing the SOW, with the balance payable according to milestones or upon completion.
                                        </li>
                                        <li>
                                            <strong>Alternative Compensation:</strong> If agreed, alternative compensation (e.g., internet access, tool usage, references) must be clearly documented in the SOW.
                                        </li>
                                        <li>
                                            <strong>Invoicing:</strong> CodeBurst will invoice according to the schedule in the SOW. Late payments incur an administrative fee (e.g., 5% after 10 days).
                                        </li>
                                        <li>
                                            <strong>Taxes:</strong> All fees are exclusive of taxes. Client is responsible for any applicable taxes unless CodeBurst is required to collect and remit.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Intellectual Property Rights</strong>
                                    <ul className="list-disc pl-4">
                                        <li>
                                            <strong>Ownership:</strong> Unless otherwise agreed, CodeBurst retains ownership of pre-existing IP and tools. Upon full payment, ownership or license rights to Deliverables are transferred to the Client as specified in the SOW.
                                        </li>
                                        <li>
                                            <strong>License to Use:</strong> CodeBurst grants Client a non-exclusive, worldwide license to use pre-existing components embedded in Deliverables, subject to any third-party license terms.
                                        </li>
                                        <li>
                                            <strong>Open Source:</strong> Deliverables may include open-source components; Client agrees to comply with respective open-source licenses.
                                        </li>
                                        <li>
                                            <strong>Moral Rights:</strong> To the extent permitted by law, CodeBurst waives moral rights in Deliverables for the benefit of the Client.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Confidentiality</strong>
                                    <ul className="list-disc pl-4">
                                        <li>
                                            <strong>NDA:</strong> Confidential Information sharing is governed by the NDA signed by both parties.
                                        </li>
                                        <li>
                                            <strong>Non-Disclosure:</strong> Both parties agree not to disclose or use Confidential Information except as necessary to perform obligations.
                                        </li>
                                        <li>
                                            <strong>Exceptions:</strong> Information that is publicly known, independently developed, or required by law to be disclosed is excluded.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Warranties and Disclaimer</strong>
                                    <ul className="list-disc pl-4">
                                        <li>
                                            <strong>Performance Warranty:</strong> CodeBurst warrants that Services will be performed with reasonable skill and care consistent with industry standards.
                                        </li>
                                        <li>
                                            <strong>Disclaimer:</strong> Except for the foregoing warranty, Services and Deliverables are provided 'as is'. CodeBurst disclaims all other warranties, express or implied, including fitness for a particular purpose.
                                        </li>
                                        <li>
                                            <strong>No Guarantee:</strong> CodeBurst does not guarantee specific results or outcomes unless explicitly stated in the SOW.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Limitation of Liability</strong>
                                    <ul className="list-disc pl-4">
                                        <li>
                                            <strong>Exclusion:</strong> To the maximum extent permitted by law, CodeBurst shall not be liable for indirect, incidental, consequential, or punitive damages arising from the Agreement or Services.
                                        </li>
                                        <li>
                                            <strong>Cap:</strong> CodeBurst’s aggregate liability for direct damages shall not exceed the total fees paid by the Client under the SOW in the 12 months preceding the claim.
                                        </li>
                                        <li>
                                            <strong>Third-Party Integrations:</strong> CodeBurst is not liable for issues arising from third-party software, services, or Client-side configurations.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Indemnification</strong>
                                    <p>
                                        Client agrees to indemnify, defend, and hold harmless CodeBurst, its affiliates, officers, and employees from any claims, liabilities, damages, or expenses arising from Client’s use of Deliverables, violation of these Terms, or infringement of third-party rights, except to the extent caused by CodeBurst’s gross negligence or willful misconduct.
                                    </p>
                                </li>
                                <li>
                                    <strong>Term and Termination</strong>
                                    <ul className="list-disc pl-4">
                                        <li>
                                            <strong>Term:</strong> The Agreement continues until completion of Services or termination as per SOW.
                                        </li>
                                        <li>
                                            <strong>Termination for Convenience:</strong> Either party may terminate the SOW upon written notice; Client shall pay for Services performed up to termination date.
                                        </li>
                                        <li>
                                            <strong>Termination for Cause:</strong> Either party may terminate if the other breaches material terms and fails to cure within 30 days of notice.
                                        </li>
                                        <li>
                                            <strong>Effect of Termination:</strong> Upon termination, Client shall pay outstanding fees; CodeBurst may suspend Services until payment.
                                        </li>
                                        <li>
                                            <strong>Survival:</strong> Sections on Intellectual Property, Confidentiality, Limitation of Liability, Indemnification, and Governing Law survive termination.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Data Protection and Privacy</strong>
                                    <p>
                                        Client data processed under this Agreement will be handled according to CodeBurst’s Privacy Policy. Client is responsible for obtaining necessary consents for any personal data provided to CodeBurst.
                                    </p>
                                </li>
                                <li>
                                    <strong>Security and Access</strong>
                                    <p>
                                        CodeBurst will implement security measures as defined in the SOW or security policy, including access controls, encryption, and secure development practices. Client must comply with necessary security protocols and provide secure access as needed.
                                    </p>
                                </li>
                                <li>
                                    <strong>Subcontracting and Freelancers</strong>
                                    <p>
                                        CodeBurst may engage subcontractors or freelancers to perform Services, subject to confidentiality and quality standards. CodeBurst remains responsible for their performance.
                                    </p>
                                </li>
                                <li>
                                    <strong>Attachment Policy</strong>
                                    <p>
                                        Any files or attachments exchanged must comply with the Attachment Policy: virus-scanned, relevant to the project, and shared via secure channels.
                                    </p>
                                </li>
                                <li>
                                    <strong>Human Rights and Ethical Standards</strong>
                                    <p>
                                        Both parties commit to non-discriminatory, ethical practices in all engagements.
                                    </p>
                                </li>
                                <li>
                                    <strong>Force Majeure</strong>
                                    <p>
                                        Neither party shall be liable for delays or failures caused by events beyond reasonable control (e.g., natural disasters, pandemics, government actions).
                                    </p>
                                </li>
                                <li>
                                    <strong>Governing Law and Dispute Resolution</strong>
                                    <p>
                                        This Agreement is governed by the laws of Lesotho. Disputes will be resolved through negotiation, and if unresolved, by the courts of Lesotho or agreed arbitration.
                                    </p>
                                </li>
                                <li>
                                    <strong>Amendments</strong>
                                    <p>
                                        CodeBurst may update these Terms and Conditions; material changes will be communicated to the Client with an opportunity to review before taking effect. Continued use implies acceptance.
                                    </p>
                                </li>
                                <li>
                                    <strong>Notices</strong>
                                    <p>
                                        All notices must be in writing and sent to the addresses specified in the SOW or via email.
                                    </p>
                                </li>
                                <li>
                                    <strong>Entire Agreement</strong>
                                    <p>
                                        These Terms and Conditions, together with the SOW, NDA, EULA, Privacy Policy, and any other referenced documents, constitute the entire agreement between the parties.
                                    </p>
                                </li>
                                <li>
                                    <strong>Contact Information</strong>
                                    <p>
                                        For queries regarding these Terms and Conditions:<br />
                                        <strong>CodeBurst Pty Ltd</strong><br />
                                        Maseru East, Lesotho<br />
                                        Email: <a href="mailto:codeburstls@gmail.com" className="underline text-blue-600">codeburstls@gmail.com</a><br />
                                        Phone: <a href="tel:+26653626661" className="underline text-blue-600">+266 5362 6661</a> / <a href="tel:+26669356845" className="underline text-blue-600">+266 6935 6845</a>
                                    </p>
                                </li>
                            </ol>
                        </p>
                    </div>
                </ScrollArea>
    )
 }